<<<<<<< HEAD

# しりとりゲーム

### 1. 프로젝트 소개

---

![Alt text](/home/nohyg/workspace/shiritori_web/frontend/src/components/shiritori.png)

しりとりゲーム는 한국어로 **끝말잇기 게임**입니다. 군대에서 일본어에 관심을 가지고 공부를 시작했습니다. 전역 후 지속적인 일본어 학습과 군 복무 중 깊게 잠든 소프트웨어적 지식을 다시 깨우고자 **일본어 끝말잇기 게임 웹**을 만들게 되었습니다. 현재는 **히라가나**로만 게임을 진행할 수 있습니다.

이 프로젝트는 React와 Django로 구현하였고 각각 최소한의 튜토리얼을 진행하였습니다.

- React: <https://github.com/n0y0j/react-tutorial>

- Django: <https://github.com/n0y0j/django-tutorial>

### 2. 기능 구현

---

#### HomePage

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 22-33-55.png)

- 자신의 닉네임을 입력하여 GamePage로 이동할 수 있습니다.

  - 만약, 자신이 입력한 닉네임이 이미 등록되어 있다면 현재 플레이한 게임의 점수와 등록되어 있는 정보의 점수를 비교합니다.
    - 현재의 점수가 높다면 이미 등록된 정보의 점수를 업데이트합니다.
    - 이미 등록된 정보의 점수가 높다면 아무 일도 일어나지 않습니다.

- 랭킹버튼을 눌러 RankingPage로 이동할 수 있습니다.

---

#### GamePage

##### 전체 모습

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 22-44-04.png)

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 22-46-37.png)

- 게임을 하기 위한 글자가 제시됩니다.
  - 게임 시작 시 히라가나 한 개가 무작위로 선택됩니다.
  - 게임 중 자신이 입력한 단어의 마지막 글자가 선택됩니다.

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 22-49-24.png)

- 게임 중 입력했었던 가장 최근의 단어 5개를 표시합니다.

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 22-51-14.png)

- 입력한 단어의 한국어 뜻을 보여줍니다.

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 22-52-36.png)

- 게임을 하기 위해 단어를 입력합니다.
  - **잘못된 단어(= 네이버 일본어 사전에 등재되어 있지 않은 단어)**를 입력 시 사용자의 정보가 DB에 저장되고 경고창과 함께 게임이 종료됩니다. (다시 HomePage로 돌아감)
  - **전에 사용했던 단어**를 입력 시 경고창이 뜨고, 새 단어를 다시 입력합니다.

#### 게임 진행

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 23-01-00.png)

#### 중복 단어 사용 시

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 23-03-04.png)

#### 게임 종료 시

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 23-03-50.png)

---

#### RankingPage

![Alt text](/home/nohyg/바탕화면/스크린샷, 2020-09-02 23-04-54.png)

- 게임을 진행한 유저들의 점수를 내림차순으로 정렬하여 보여줍니다.

- 돌아가기 버튼 클릭 시 HomePage로 되돌아갑니다.



***

