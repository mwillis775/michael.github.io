import os
from bs4 import BeautifulSoup

# Set your project root directory
PROJECT_ROOT = "/home/michael/michael.github.io"

# Map of main page filenames to their correct root-relative hrefs
main_page_links = {
    "index.html": "/index.html",
    "phylogenetic-tree.html": "/phylogenetic-tree.html",
    "families.html": "/families.html",
    "identification.html": "/identification.html",
    "dicotkey.html": "/dicotkey.html",
    "about.html": "/about.html"
}

def fix_header_links(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")
    header = soup.find("header")
    if not header:
        return False
    changed = False
    nav = header.find("nav")
    if nav:
        for a in nav.find_all("a", href=True):
            fname = a["href"].split("?", 1)[0].split("#", 1)[0]
            fname = os.path.basename(fname)
            if fname in main_page_links and a["href"] != main_page_links[fname]:
                a["href"] = main_page_links[fname]
                changed = True
    if changed:
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(str(soup))
    return changed

def main():
    for fname in os.listdir(PROJECT_ROOT):
        if fname.endswith(".html"):
            path = os.path.join(PROJECT_ROOT, fname)
            if fix_header_links(path):
                print(f"Fixed header links in {fname}")
    # Also fix in subfolders (e.g., families/)
    for subdir in ["families", "identification"]:
        subpath = os.path.join(PROJECT_ROOT, subdir)
        if os.path.isdir(subpath):
            for fname in os.listdir(subpath):
                if fname.endswith(".html"):
                    path = os.path.join(subpath, fname)
                    if fix_header_links(path):
                        print(f"Fixed header links in {subdir}/{fname}")

if __name__ == "__main__":
    main()