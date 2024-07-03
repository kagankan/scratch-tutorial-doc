# プログラミング教室 第 3 回<br>アクションゲームをつくろう

## 心得

1. どうなるかわからないときは、たくさん試してみよう！ たくさん失敗しよう！
2. マネするだけではなく、「どうして動く？」や「変えてみたらどうなる？」を考えよう！
3. わからないことがあるときは、周りの友達や、スタッフさんに質問しよう！

<div class="work">

## アクションゲームを作る

移動・ジャンプ・攻撃をしながら、相手を倒すゲームを作ります。

<img src="images/2022-10-10-05-49-21.png" alt="" width="360" />


### <span class="divide">小さく分けて考える</span>

- プレイヤーを左右に動かす
- プレイヤーをジャンプさせる・落下させる
- 敵を動かす
- プレイヤーが敵に当たったらダメージを受ける（自分のHPが減る）
- プレイヤーが敵を攻撃できる（敵のHPが減る）
- ゲームクリア・ゲームオーバーの表示をする

</div>

---

<div class="work">

## プレイヤーを左右に動かす

#### （ネコ以外のスプライトを使う場合は）プレイヤーのスプライトを追加する

#### 左右矢印キー（「←」「→」）を押したときに左右に動くようにプログラムを作る

<img src="images/2022-10-10-04-29-11.png" alt="" width="300" />

#### <img src="images/flag.png" alt="旗" width="30" /> をクリックして、左右矢印キー（「←」「→」）を押したときにプレイヤーが動くか確認する。<br>動くだけでなく、向きもしっかり左右を向いているかチェック！

</div>

<div class="work work--extra">

## チャレンジ 移動スピードを変えてみよう

<span class="find">大事なところを見つけ出す</span>
矢印キーを押したときに動くスピードを変えるにはどの数字を変えたらいいだろう？
動くスピードを速くしたり遅くしたりしてみよう。

</div>

---

## 「◯色に触れた」ブロック

<div class="columns-two">
選択した色に触れているかどうかを調べることができるブロック。<br/>
今回は、地面に触れているかどうかを調べるのに使います。
<img src="images/2022-10-10-04-09-39.png" alt="" width="200" />
</div>

<div class="columns-two" style="margin-top: 10px;">
「スポイト」機能を使って、画面に表示されているのと同じ色を選択します。
<img src="images/2022-10-10-04-10-35.png" alt="" width="200" />
</div>

<div class="work">

## プレイヤーをジャンプさせる・落下させる

#### 背景を設定する

<img src="images/2022-10-10-03-55-07.png" alt="" width="150" />

ここでは、 **地面が1色になっていること** が重要です。
もし違う背景を選ぶ場合は、地面を1色で平らに塗りつぶしましょう。

---

#### プログラムをシミュレーションする

<img src="images/2022-10-10-04-20-44.png" alt="" width="300" />

<span class="simulate">頭の中で動かしてみる</span> ジャンプがどんな風に動くのかシミュレーションしよう。

![](images/2023-10-09-20-20-15.png)


---

#### プログラムを作る


#### <img src="images/flag.png" alt="旗" width="30" /> を押して、ジャンプできるか確認する。

</div>

<div class="work work--extra">

## 実験してみよう

一部の命令がなかったらどうなるだろう？　一つずつ外して試してみよう。
実験した結果、どんな違いがあったか下の枠に書いておこう。

<div class="columns-two" style="column-gap: 10px;">
<div>

**1. <img src="images/2022-10-16-03-42-47.png" alt="" height="36" /> がないとき**

<img src="images/2022-10-16-04-26-59.png" alt="" width="150" />

<div style="background: white; height: 2.2cm; border: black 1px solid; margin-top: 0.2cm;">
<strong>実験結果：</strong>
<img src="images/2022-10-16-03-42-47.png" alt="" height="24" /> がないと、
</div>
</div>
<div>

**2. <img src="images/2022-10-16-04-04-57.png" alt="" height="36" /> がないとき**

<img src="images/2022-10-16-04-27-56.png" alt="" width="150" />

<div style="background: white; height: 2.2cm; border: black 1px solid; margin-top: 0.2cm;">
<strong>実験結果：</strong>
<img src="images/2022-10-16-04-04-57.png" alt="" height="24" /> がないと、
</div>
</div>
<div>

**3. <img src="images/2022-10-16-04-10-35.png" alt="" height="36" /> がないとき**

<img src="images/2022-10-16-04-28-34.png" alt="" width="150" />
<div style="background: white; height: 2.2cm; border: black 1px solid; margin-top: 0.2cm;">
<strong>実験結果：</strong>
<img src="images/2022-10-16-04-10-35.png" alt="" height="24" /> がないと、
</div>
</div>
</div>
</div>

<div class="work work--extra">

## チャレンジ ジャンプ力を変えてみよう

**1. ジャンプする高さ**
**2. ジャンプするスピード**
をそれぞれ変えてみよう。どの数字を変えたらいいだろう？

</div>

<div class="work">

## 敵を追加して、動かす

#### 敵のスプライト（例：タコ <img src="images/2022-10-10-04-45-41.png" alt="" width="60" /> ）を追加する


#### <span class="simulate">頭の中で動かしてみる</span> プログラムをシミュレーションする

<div class="columns-two">
<img src="images/2022-10-10-04-46-49.png" alt="" width="210" />
<img src="images/2023-10-09-23-06-50.png" alt="" width="800" />
</div>

#### 敵のプログラムを作る


</div>

<div class="work work--extra">

## チャレンジ 敵の動きを変えてみよう

<span class="find">大事なところを見つけ出す</span>
動くスピード・動き方を変えてみよう。
見本では横にだけ動いているけど、**縦（上下）に動かす**にはどうすればいいだろう？

</div>

---


<div class="work">

## 敵に当たったらダメージを受けるようにする

#### 「ダメージ」状態のコスチュームを描く

コスチュームを右クリック（長押し）して、「複製（ふくせい）」して作ろう。
ダメージを受けたことがわかる見た目にしよう。

<div class="columns-two">
<img src="images/2022-10-10-05-18-26.png" alt="" width="250" />
<img src="images/2022-10-10-04-56-52.png" alt="" width="250" />
</div>

#### コスチュームの名前をそれぞれ「つうじょう」「ダメージ」に変更する
このあとプログラムを作るときに、この名前を使います。

<img src="images/2022-10-10-04-57-32.png" alt="" width="300" />

---

#### プログラムを作る

「自分にダメージ」はメッセージを追加、「自分のHP」は変数を追加する。

![](images/2022-10-10-04-54-20.png)

<!-- ![](images/2022-10-16-03-18-34.png) -->


#### 旗 <img src="images/flag.png" alt="" width="30" /> をクリックして、敵に当たったらダメージを受けるか確かめる。

</div>



<div class="work work--extra">

## チャレンジ HPとダメージを増やしてみよう

<span class="find">大事なところを見つけ出す</span>
**「最大HPを100にする」**、**「ダメージを10にする」**など、数字を変えてみよう。

</div>

---

<div class="work work--extra">

## 実験してみよう

<img src="images/2022-10-16-03-28-43.png" alt="" height="30" /> がなかったらどうなるだろう？
ためしに外してみて、実験してみよう（実験が終わったら戻しておこう）。

<img src="images/2022-10-16-03-28-10.png" alt="" width="220" />

<div style="background: white; border: black 1px solid; margin-top: 0.4cm; padding: 0.2cm;">
<strong>実験結果：</strong> <img src="images/2022-10-16-03-28-43.png" alt="" height="30" /> がなかったら、<br/><br/><br/>
</div>

</div>

<div class="work work--extra">

## 発展 ダメージを受けたときの演出をつけてみよう

ダメージを受けたときに、プレイヤーをチカチカと点滅させてみよう。
ダメージを受けたことがわかりやすくなるよ。

<img src="images/2022-10-10-04-40-42.png" alt="" width="300" />

</div>

---

<div class="work">

## 攻撃して、敵にダメージを与えられるようにする
#### プレイヤーの「こうげき」状態のコスチュームを描く

<img src="images/2022-10-10-05-08-23.png" alt="" width="250" />

#### 描いたコスチュームの名前を「こうげき」にする

<img src="images/2022-10-10-06-12-46.png" alt="" width="150" />

#### 敵の「ダメージ」状態のコスチュームを描く

<img src="images/2022-10-10-04-35-41.png" alt="" width="250" />

#### コスチュームの名前をそれぞれ「つうじょう」「ダメージ」にする

<img src="images/2022-10-10-05-38-19.png" alt="" width="250" />

---

#### プログラムを作る

**プレイヤーのプログラム**

<img src="images/2022-10-10-05-09-57.png" alt="" width="250" />

**敵のプログラム**

![](images/2022-10-10-05-11-58.png)

#### <img src="images/flag.png" alt="旗" width="30" /> をクリックして、攻撃してダメージを与えられるか確認する。

</div>

---

<div class="work">

## 「勝ち」（ゲームクリア）画面を作ろう

#### 「勝ち」を表示するスプライトを描く

<img src="images/2022-10-10-05-43-24.png" alt="" width="150" />

#### 敵のHPがなくなったときに、「勝ち」を表示するように、プログラムを作る

<div class="columns-two">
<div>

**敵のプログラム**

<img src="images/2022-10-10-05-45-42.png" alt="" width="300" />
</div>
<div>

**「勝ち」のプログラム**

<img src="images/2022-10-10-05-43-49.png" alt="" width="150" />
</div>
</div>

#### 完成！　保存しよう

</div>

<div class="work work--extra">

## 発展　「負け」（ゲームオーバー）画面を作ろう

「勝ち」画面を作ったのを参考に、**自分のHPがなくなったとき** に **「負け」** の画面を表示するようにしてみよう。

</div>

---


<div class="work work--extra">

## 発展 ステージに足場を追加しよう

背景に **地面と同じ色で** 足場を追加して、着地できる場所を増やしてみよう。



</div>

<div class="work work--extra">

## 発展 無敵状態になるアイテムを作ろう

#### アイテム（星 <img src="images/2022-10-10-06-36-09.png" alt="" width="60" />）を追加する

####  アイテムを取ったあと無敵状態になるようにプログラムを変える

無敵状態のときは、敵にダメージを与えられるように、「こうげき」のコスチュームにする。
「色」の効果を使って、虹色に光るような見た目にしよう。

<img src="images/2022-10-10-06-58-57.png" alt="" width="600" />

</div>

<div class="work work--extra">

## 改良のヒント

- 攻撃したときやダメージを受けたときに効果音をつける
- BGMをつける
- 背景やキャラクターを変える
- 敵の動きを変える
- 敵の数を増やす
- 敵のHPを増やす

</div>


---

## 他の人に自分の作品を見せよう
一人ずつ、自分の作品を紹介しましょう。どんなところを工夫したか、なにがまだできていないのかなどを説明してください。

## 次回

次回は **シューティングゲーム** を作ります！　iPadの充電を忘れずにして、来てください。

---

## 切り取り用

<span class="simulate">頭の中で動かしてみる</span> で、キャラクターの動きをシミュレーションするときに使います。

<div style="display: flex; justify-content: center; gap: 2rem; align-items: center; margin-top: 0.5cm;">

<img src="images/2023-10-09-22-07-47.png" alt="" width="150" style="border: 1px solid black; display: inline-block;"/> <img src="images/2023-10-09-23-19-36.png" alt="" width="125"  style="border: 1px solid black; display: inline-block;"/>

</div>