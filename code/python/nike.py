# -*- coding: utf-8 -*-
from requests_html import HTMLSession
from pprint import pprint


def main():
    prefix = "https://www.nike.com"
    url = "https://www.nike.com/cn/launch?s=upcoming"
    session = HTMLSession()
    r = session.get(url)
    elements = set(r.html.find("a.card-link"))
    href_list = {element.attrs.get("href") for element in elements}
    for href in set(href_list):
        print(href)
        # headline-5 pb6-sm fs14-sm fs16-md
        # headline-5 pb6-sm fs14-sm fs16-md
        r = session.get(prefix + href)
        e = r.html.find("div.headline-5", first=True)
        print(e.text)
        # print(session.get(prefix + href))
    # pprint(r.html.absolute_links)


if __name__ == "__main__":
    main()
