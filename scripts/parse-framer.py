import re
import html as html_lib

path = r"C:\Users\ayand\Documents\VILATECH\PLANTFY TECH\plantify-website\framer-ref.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

texts = re.findall(r">([^<>]{4,120})<", content)
seen = set()
for t in texts:
    t = html_lib.unescape(t.strip())
    if t in seen:
        continue
    seen.add(t)
    if any(k in t.lower() for k in ["invest", "step", "farmer", "browse", "contact", "logo", "how", "power"]):
        print(t)

print("\n--- IMAGES ---")
imgs = re.findall(r"https://framerusercontent\.com/[^\"'\\s]+", content)
for u in sorted(set(imgs))[:40]:
    print(u[:140])

print("\n--- COLORS ---")
colors = re.findall(r"#[0-9a-fA-F]{3,8}", content)
from collections import Counter
for c, n in Counter(colors).most_common(20):
    print(c, n)
