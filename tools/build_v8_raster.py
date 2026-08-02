from __future__ import annotations

import base64
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SVG_DIR = ROOT / "assets" / "v8"
OUT_DIR = ROOT / "assets" / "v8-raster"
SOURCE_HTML = ROOT / "app-v8-canon.html"
OUTPUT_HTML = ROOT / "app-v8-raster.html"

DATA_RE = re.compile(
    r'href="data:image/(?P<format>[a-zA-Z0-9.+-]+);base64,(?P<data>[^"]+)"'
)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    expected = {
        "home",
        "orders",
        "repair",
        "clients",
        "more",
        "new-repair",
        "qr",
        "search",
    }
    produced: set[str] = set()

    for svg_path in sorted(SVG_DIR.glob("*.svg")):
        match = DATA_RE.search(svg_path.read_text(encoding="utf-8"))
        if not match:
            raise RuntimeError(f"Embedded image not found: {svg_path}")

        image_format = match.group("format").lower()
        if image_format != "webp":
            raise RuntimeError(
                f"Unexpected embedded format in {svg_path}: {image_format}"
            )

        raw = base64.b64decode(match.group("data"), validate=True)
        if not raw.startswith(b"RIFF") or raw[8:12] != b"WEBP":
            raise RuntimeError(f"Invalid WebP payload in {svg_path}")

        output = OUT_DIR / f"{svg_path.stem}.webp"
        output.write_bytes(raw)
        produced.add(svg_path.stem)
        print(f"wrote {output.relative_to(ROOT)} ({len(raw)} bytes)")

    if produced != expected:
        raise RuntimeError(
            f"Unexpected v8 asset set. expected={sorted(expected)} produced={sorted(produced)}"
        )

    html = SOURCE_HTML.read_text(encoding="utf-8")
    for name in sorted(expected):
        html = html.replace(
            f"assets/v8/{name}.svg", f"assets/v8-raster/{name}.webp"
        )

    html = html.replace(
        "v8 Canon Fidelity", "v8 Canon Fidelity — Safari Raster"
    )
    html = html.replace("20260802-1", "20260802-2")

    if "assets/v8/" in html or ".svg" in html:
        raise RuntimeError("SVG reference remained in generated raster HTML")

    OUTPUT_HTML.write_text(html, encoding="utf-8", newline="\n")
    print(f"wrote {OUTPUT_HTML.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
