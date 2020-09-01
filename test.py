import aiohttp
import asyncio
from selenium import webdriver
from bs4 import BeautifulSoup

# async def fetch(session, url):
#     async with session.get(url) as response:
#         return await response.text()

async def get_url(words):
    async with aiohttp.ClientSession() as session:
        options = webdriver.ChromeOptions()
        options.add_argument('headless')
        options.add_argument('disable-gpu')
        driver = webdriver.Chrome(
            '/usr/bin/chromedriver', chrome_options=options)
        a = await driver.get('https://ja.dict.naver.com/#/search?query=' + words)
        return a

def hi():
  loop = asyncio.get_event_loop()
  a= loop.run_until_complete(get_url("おおい"))
  print(a)


hi()


    # async with aiohttp.ClientSession() as session:
    #     options = webdriver.ChromeOptions()
    #     options.add_argument('headless')
    #     options.add_argument('disable-gpu')
    #     driver = webdriver.Chrome(
    #         '/usr/bin/chromedriver', chrome_options=options)

    #     await asyncio.ensure_future(driver.get('https://ja.dict.naver.com/#/search?query=' + words))

    #     html = driver.page_source
    #     soup = BeautifulSoup(html, "lxml")
