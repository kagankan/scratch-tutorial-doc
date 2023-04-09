# プログラミング教室 第 2 回<br>くだもの拾いゲームをつくろう

<div style="text-align: right;">
2022年 10月 8日 岸 嘉丸
</div>

## 心得

1. どうなるかわからないときは、たくさん試してみよう！ たくさん失敗しよう！
2. マネするだけではなく、「どうして動く？」や「変えてみたらどうなる？」を考えよう！
3. わからないことがあるときは、周りの友達や、スタッフさんに質問しよう！


<div class="work">

## くだもの拾いゲームを作ろう
落ちてくるくだもの（りんご）を拾うゲームを作ります。

<img src="./images/image31.png" alt="" width="250" />

### <span class="divide">小さく分けて考える</span>

- プレイヤー（ボウル）を左右に動かす。
- くだもの（例：りんご）を、上から落とす。
- プレイヤーがくだものに当たると、スコアを加算する。
- 制限時間をつけて、時間切れになるとゲームを終了する。

</div>

---

<!-- マウス操作も検討したが、キーボード操作のほうが移動の実装がシンプルなのでキーボードで。 -->
<!-- ## 「○○キーが押された」ブロック
キーボードで操作するときは、 **「○○キーが押された」** ブロックを使います。

<img src="./images/image3.png" alt="" width="200" /> -->


## xy座標（エックス・ワイざひょう）
座標（ざひょう）とは、画面の中の場所を、数字で表す方法のことです。
横（よこ）の位置を x（エックス）座標、縦（たて）の位置を y（ワイ）座標で表します。

<img src="./images/image5.png" alt="" width="500" />

スプライトの座標は、スプライトの名前の横に表示されています。

<img src="./images/image6.png" alt="" width="400" />

背景から「xy-grid」を選ぶと、背景に座標軸を表示できます。

<div class="columns-two">
<img src="./images/image7.png" alt="" width="150" />
<img src="./images/image8.png" alt="" width="250" />
</div>

---

<div class="work">

### プレイヤーを動かす

<!-- 新規作成する。 -->
<!-- <img src="./images/image32.png" alt="" width="300" /> -->

#### ボウルのスプライトを追加する。

<img src="./images/image33.png" alt="" width="100" />

#### ネコは使わないので削除する。
#### ボウル <img src="./images/image33.png" alt="" width="50" /> をプログラムして、横に動くようにする。

<img src="./images/2022-10-01-18-08-08.png" alt="" width="300" />

#### <img src="./images/flag.png" alt="" width="30" /> をクリックして、キーボードで動かせることを確認する。
うまくいかないときは、プログラムを直そう。うまくできていたら次に進みます。

</div>

### x軸（横の動き）

<img src="./images/move-x.png" alt="" width="500" />

---

## クローン
クローンは、分身をつくる機能で、おなじスプライトをたくさん表示させたいときに使います。

<img src="./images/image4.png" alt="" width="600" />

<div class="work">

## リンゴを落とす

#### リンゴのスプライトを追加する

<img src="./images/image35.png" alt="" width="100" />

#### リンゴの大きさを 60 くらいにして、リンゴを小さくする。

<img src="./images/image36.png" alt="" width="300" />

---

#### リンゴ <img src="./images/image35.png" alt="" width="50" /> をプログラムして、ランダムな場所から落ちてくるようにする。

<img src="./images/image37.png" alt="" width="600" />

####  このプログラムを動かすとどうなるか、まずは頭の中で動かしてみよう

<!-- りんごの動きをシミュレーションさせる -->
<span class="simulate">頭の中で動かしてみる</span> リンゴがどんな風に動くのかシミュレーションしよう。

<div style="background: white;">
<img src="./images/2022-09-26-04-46-32.png" alt="" width="600" style="opacity: 0.3;" />
</div>

#### <img src="./images/flag.png" alt="" width="30" /> をクリックして、リンゴがランダムな場所から落ちることをたしかめる。

</div>

---

## 変数（へんすう）
変数（へんすう）とは、「変更できる数」のことです。
例えば、ゲームのスコアを記録したり、HP を設定したりできます。

<div class="columns-two">
<img src="./images/image26.png" alt="" width="200" />
<img src="./images/image27.png" alt="" width="150" />
</div>

## 変数の使い方
### 変数を作る
「変数を作る」をクリックして、変数の名前を入力します。

<div class="columns-two">
<img src="./images/image28.png" alt="" width="260" />
<img src="./images/image29.png" alt="" width="260" />
</div>

### 変数の値を表示する / 非表示にする

変数名の左の四角（チェックボックス）をクリックすると、ステージに変数の値を表示する
か、非表示にするかを切り替えることができます。

<img src="./images/image30.png" alt="" width="300" />

---

<div class="work">

## スコアを記録する
#### 「スコア」の変数を作る

<div class="columns-two">
<img src="./images/image28.png" alt="" width="200" />
<img src="./images/image29.png" alt="" width="200" />
</div>


####  リンゴをひろうとスコアが増えるように、リンゴのプログラムを変更する。

<img src="./images/image39.png" alt="" width="600" />

#### <img src="./images/flag.png" alt="" width="40" /> をクリックして、リンゴがボウルにふれるとスコアが増えることをたしかめる。

</div>


---

<div class="work">

## 制限時間をつける
####  「残り時間」の変数を作る。作り方はスコアと同じ。

<img src="./images/image40.png" alt="" width="100" />


####  ボウルに残り時間を計測するプログラム

<!-- 時間計測をシミュレーションさせる -->
<img src="./images/image41.png" alt="" width="600" />

<span class="simulate">頭の中で動かしてみる</span> 残り時間がどう変わるのかシミュレーションしよう。

<div style="background: white; height: 200px;"></div>

#### プログラムを作る


#### <img src="./images/flag.png" alt="" width="40" /> をクリックして、時間がたったらゲームが終わることをたしかめる。

</div>

---

<div class="work">

## 背景を設定する

<img src="./images/image42.png" alt="" width="200" />

**完成！**

##  つくったプログラムを保存しよう
プログラムを保存します。
</div>

<div class="work work--extra">

## 発展　一番下まで落ちたリンゴを消す

リンゴのコードを改良して、下に落ちたリンゴが消えるようにしよう。

<img src="./images/remove_on_fall.png" alt="" width="600" />

</div>

---

<div class="work work--extra">

## 発展　スコアが減るアイテムを作ろう

#### 新しいスプライトを追加する（例：カミナリ <img src="./images/2022-10-01-23-38-50.png" alt="" width="50" /> 。他でもOK）

#### リンゴのコードをコピーする（コードをドラッグして、新しいスプライトの上でドロップ）

<img src="./images/2022-10-01-23-42-08.png" alt="" width="250" />

#### 当たったときにスコアがへるように、コードを直す

<span class="find">大事なところを見つけ出す</span> スコアをへらすためには、どこを変えればいいだろう？　今スコアを増やしているのは、どの命令かな？　考えてみよう

#### その他、落ちるスピードや、出てくる個数を調整する。

</div>

<div class="work work--extra">

## 改良のヒント

- **リンゴが落ちるまでの時間をランダムにする**
- **スコアが増えるほど、ボウルの動きが遅くなるようにする**

</div>

## 他の人に自分の作品を見せよう
一人ずつ、自分の作品を紹介しましょう。どんなところを工夫したか、なにがまだできていないのかなどを説明してください。

## 次回

次回は **アクションゲーム** を作ります！　iPadの充電を忘れずにして、来てください。