from bs4 import BeautifulSoup

with open("index.html", "r") as f:
    soup = BeautifulSoup(f, features="html.parser")

new_post = soup.new_tag('p')
new_post.attrs['class'] = 'post'
new_post.append(input())

parent = soup.find('div', {'id': "thread"})
parent.append(new_post)

with open("index.html", "w") as f:
    f.write(str(soup))
