# プログラミング教室 第 4 回<br>シューティングゲームをつくろう


## 心得

1. どうなるかわからないときは、たくさん試してみよう！ たくさん失敗しよう！
2. マネするだけではなく、「どうして動く？」や「変えてみたらどうなる？」を考えよう！
3. わからないことがあるときは、周りの友達や、スタッフさんに質問しよう！

<div class="work">

##  シューティングゲームを作ろう

<img src="images/image9.png" alt="" width="300" />

<span class="divide">小さく分けて考える</span>

- プレイヤーを「←」「→」（矢印キー）で動かす
- 「スペースキー」でビームを出す。
- 画面の上の方に、敵がたくさん並ぶ。
- ビームが敵に当たると敵が消える。

</div>

---

## 復習 xy座標

<div class="columns-two">
座標（ざひょう）とは、画面の中の場所を、数字で表す方法のことです。<br>
横（よこ）の位置を x（エックス）座標、縦（たて）の位置を y（ワイ）座標で表します。
<img src="./images/image5.png" alt="" width="260" />
</div>

<div class="work">

## プレイヤーを操作する

#### プレイヤーのスプライト（例：チョウチョ <img src="images/image10.png" alt="" width="60" /> ）を追加する。

#### プレイヤーをキーボードで動かせるようにプログラムする。

<img src="images/image11.png" alt="" width="500" />

#### <img src="images/flag.png" alt="旗" width="30" /> をクリックして、キーボードでプレイヤーを操作できることを確認する。

</div>

<div class="work work--extra">

## 発展　移動スピードを変えてみよう

<span class="find">大事なところを見つけ出す</span> 動くスピードを速くしたり遅くしたりしてみよう。

</div>

---

## 復習 クローン

クローンは、分身をつくる機能で、おなじスプライトをたくさん表示させたいときに使います。

<img src="./images/clone.png" alt="" width="500" />

<div class="work">

## ビームを出す

#### ビームのスプライトを描く。

<div class="columns-two">
<img src="images/image14.png" alt="" width="100" />
<img src="images/image13.png" alt="" width="200" />
</div>

#### ちょうどいい大きさに変える。

<img src="images/image15.png" alt="" width="250" />

---

#### <span class="simulate">頭の中で動かしてみる</span> プログラムをシミュレーションする。


<img src="images/image16.png" alt="" width="500" />

<img src="images/2023-11-03-21-54-13.png" alt="" width="500" />

#### ビームをプログラムして、スペースキーで発射されるようにする。

#### <img src="images/flag.png" alt="旗" width="30" /> をクリックして、スペースキーを押すとビームが出るか確認する。
ビームが真ん中から発射されないときは、スプライトがまんなかにあるか確認しよう。

<img src="images/image17.png" alt="" width="500" />

</div>

<!-- ## 発展 連射スピードを変えてみよう -->
<!-- ここに入れたかったが、紙面の都合上カット -->

---

<div class="work">

## 敵を並べる

#### <span class="simulate">頭の中で動かしてみる</span> プログラムをシミュレーションする。

<img src="images/image21.png" alt="" width="500" />

<div style="background: white; width: fit-content; margin: auto;">
<img src="images/xy-grid.png" alt="" width="600" />
</div>

---

### プログラムを作る

#### 敵のスプライト（例：虫 <img src="images/image18.png" alt="" width="60" /> ）を追加する。

#### 下を向くように、スプライトの「向き」を変更する。

<div class="columns-two">
<img src="images/image19.png" alt="" width="200" />
<img src="images/image20.png" alt="" width="100" />
</div>

#### プログラムを作る。

#### <img src="images/flag.png" alt="旗" width="30" /> をクリックして、「敵が出てくること」「ビームに当たったら消えること」をたしかめる。

</div>

<div class="work work--extra">

## 発展 敵の数・並べ方を変えてみよう

たとえば、次のようにするにはどうすればいいだろう？

- 列の数を増やして、5列にする
- 縦の間隔を広くする

<div class="columns-two">
<img src="images/2022-11-05-21-13-36.png" alt="" width="250" />
<img src="images/2022-11-05-21-11-59.png" alt="" width="250" />
</div>

</div>

---

<div class="work work--extra">

## 発展 敵を動かそう
敵のプログラムに、動かすプログラムを追加しよう（今あるプログラムはそのまま）。

<img src="images/image24.png" alt="" width="500" />

</div>

<div class="work work--extra">

## 発展 敵を倒したらビームが消えるようにしよう
1 つのビームで 2 体の敵が倒せてしまう。
ビームのプログラムを改良して、敵に当たったら消えるようにしよう。

<img src="images/image25.png" alt="" width="400" />

※「0.01秒待つ」がないと、敵にビームが当たったことを判定する前にビームが消えてしまい、敵が消えなくなってしまう。

</div>

---

<div class="work">

## 背景を設定する

<img src="images/image23.png" alt="" width="150" />

**完成！**

##  つくったプログラムを保存しよう
プログラムを保存します。

</div>

<div class="work work--extra">

## 改良のヒント

- 残りの敵の数を数えて、全部倒したらクリア画面を表示する
- 全部倒したら、次のステージに進んで、もっとたくさんの敵が出てくる
- 敵からもビームを出す
- 連射の間隔を変える
- クリアタイムを計測する
- キャラクターや背景を変更する

</div>

<!-- 「ステージ切り替え」というテクを入れてもいいかもしれない -->


## 他の人に自分の作品を見せよう
一人ずつ、自分の作品を紹介しましょう。どんなところを工夫したか、なにがまだできていないのかなどを説明してください。

## 次回

次回は **自分のゲーム** を作ります！　
ゲームを作る際の参考にするため、 **これまでのプリント** も持ってくるようにしましょう。
**iPad**の充電を忘れずにして、来てください。

---

## 切り取り用

<span class="simulate">頭の中で動かしてみる</span> で、キャラクターの動きをシミュレーションするときに使います。


<!-- TODO: ビームと虫のカードを入れる -->


<table style="margin: auto;">
<tr>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-00.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-00.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-00.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-00.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-00.png" alt="" width="100" /></td>
</tr>
<tr>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
</tr>
<tr>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
<td style="border: 1px solid black;"><img src="images/2023-11-03-21-59-58.png" alt="" width="100" /></td>
</tr>
</table>