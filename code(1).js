const lines = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
function parseBase11ToBigInt(body) { return [...body].reduce((acc, char) => acc * 11n + BigInt(parseInt(char, 11)), 0n); }
function modPow(base,exp,mod){let result=1n;base%=mod;while(exp>0n){if(exp&1n)result=result*base%mod;base=base*base%mod;exp>>=1n;}return result;}
function Setpq(){function isPrime(n){if(n<2n)return false;if(n===2n||n===3n)return true;if(n%2n===0n)return false;let d=n-1n;let r=0;while((d&1n)===0n){d>>=1n;r++;}const bases=[2n,3n,5n,7n,11n,13n,17n];for(const a of bases){if(a>=n)continue;let x=modPow(a,d,n);if(x===1n||x===n-1n)continue;let passed=false;for(let i=1;i<r;i++){x=x*x%n;if(x===n-1n){passed=true;break;}}if(!passed)return false;}return true;}function randomPrime(){while(true){const digits=18+Math.floor(Math.random()*3);let s=String(Math.floor(Math.random()*9)+1);while(s.length<digits){s+=Math.floor(Math.random()*10);}let n=BigInt(s);if(n%2n===0n)n++;while(!isPrime(n)){n+=2n;}return n;}}let p=randomPrime();let q;do{q=randomPrime();}while(q===p);return[p,q];}
function Sete(){let phi=(pq[0]-1n)*(pq[1]-1n);function gcd(a,b){while(b){[a,b]=[b,a%b];}return a;}let e=65537n;if(gcd(e,phi)===1n)return e;e=3n;while(gcd(e,phi)!==1n){e+=2n;}return e;}
function Setd(){let phi=(pq[0]-1n)*(pq[1]-1n);function modInverse(a,m){let [old_r,r]=[a,m];let [old_s,s]=[1n,0n];while(r){let q=old_r/r;[old_r,r]=[r,old_r-q*r];[old_s,s]=[s,old_s-q*s];}return (old_s%m+m)%m;}return modInverse(e,phi);}
let pq = Setpq();
let n = pq[0] * pq[1];
let e = Sete();
let d = Setd();
const readings = lines[0];
const letters = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","っ","ー","きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","にゃ","にゅ","にょ","ひゃ","ひゅ","ひょ","みゃ","みゅ","みょ","りゃ","りゅ","りょ","ぎゃ","ぎゅ","ぎょ","じゃ","じゅ","じょ","ぢゃ","ぢゅ","ぢょ","びゃ","びゅ","びょ","ぴゃ","ぴゅ","ぴょ"];
const S = ["母は","犬は","彼は","彼女は","父は","弟は","妹は","姉は","兄は","おじいちゃんは","おばあちゃんは","猫は","男は","女は","先生は","友達は","先輩は","後輩は","知り合いは","キリンは","私は","自分は","俺は","僕は","あなたは","それは","政治家は","小説家は","君は","あの子は","あいつは","みんなは","大人は","少年は","少女は","お年寄りは","家族は","患者は","医者は","敵は","主人公は","旅人は","勇者は","社員は","社長は","警察官は","消防士は","上司は","部下は","同僚は","狂信者は","サルは","審判は","鳥は","魚は","馬は","牛は","ライオンは","赤ちゃんは","小学生は","中学生は","高校生は","大学生は","児童は","課長は","客は","自衛官は","運転手は","船長は","大工さんは","職人は","歌手は","モデルは","女優は","俳優は","作家は","漫画家は","ダンサーは","画家は","首相は","市長は","知事は","大統領は","王様は","王子は","女王は","両親は","息子は","恋人は","主人は","メイドは","大臣は","将軍は","巫女は","忍者は","武士は","市民は","監督は","犯人は","司会者は","ファンは","孫は","いとこは","おじは","おばは","夫は","妻は","クラスメートは","隣の人は","教授は","校長は","店員は","外国人は","お父さんは","お母さんは","お兄さんは","お姉さんは","パパは","ママは","担任は","相方は"];
const M = ["赤い","大きい","小さい","高い","古そうな","長い","短い","古い","丸い","四角い","青い","黄色い","白い","明るい","美しい","きれいな","かわいい","かっこいい","丈夫な","立派な","弱い","強い","軽い","重い","寒い","熱い","冷たい","柔らかい","固い","涼しい","甘い","辛い","苦い","おいしい","複雑な","人気な","有名な","難しい","楽しそうに","嬉しそうに","悲しそうに","面白そうに","苦しそうに","優しい","真面目な","眠そうに","日本の","緑の","動いている","汚い","真っ白な","真っ黒な","やすい","安価な","高級な","厚い","薄い","新しい","静かな","たくさんの","	","特大の","高性能な","透明な","輝いた","苦い","おいしい","尖った","ベタついた","ツルツルの","多い","少ない","鮮やかな","円形の","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
const O = ["庭を","空を","地面を","布を","貝を","家を","弁当を","ペンを","メガネを","服を","耳を","目を","花を","ボタンを","土地を","机を","椅子を","豆を","靴を","舌を","時計を","窓を","手を","足を","線を","紙を","数を","息を","ゴムを","爪を","骨を","本を","棚を","水を","火を","木を","炭を","道を","柱を","穴を","点を","歯を","葉を","毛を","板を","台を","彼を","彼女を","人を","糸を","川を","革を","部屋を","字を","森を","林を","鉄を","指を","ロッカーを","愛を","夢を","箱を","辞書を","地図を","カメラを","写真を","アニメを","ゲームを","車を","橋を","ノートを","馬を","牛を","廊下を","階段を","館を","駅を","犬を","猫を","鳥を","魚を","象を","城を","山を","朝を","冬を","鍵を","ドアを","缶を","茶を","口を","パンを","ピザを","石を","岩を","砂を","天井を","はしごを","壁を","草を","空気を","音を","風を","コードを","これを","それを","あれを","いちごを","学生を","顔を","海を","丸を","雪を","野菜を","声を","光を","国民を","状況を","個人を","世界を","大人を"];
const V = ["知った","生きた","わかった","見た","入れた","嗅いだ","感じた","言った","考えた","想像した","撮った","取った","含んだ","移した","映した","写した","確認した","見直した","触った","得た","失った","使った","探した","覚えた","忘れた","選んだ","作った","増やした","減らした","捨てた","集めた","変えた","比べた","隠した","運んだ","切った","好んだ","学んだ","愛した","嫌った","汚した","包んだ","思った","予想した","疑った","迷った","調べた","試した","戻した","守った","伝えた","壊した","置いた","聞いた","除いた","覗いた","見張った","語った","教えた","尋ねた","褒めた","貶した","呼んだ","恐れた","憎んだ","誇った","認めた","評価した","保った","維持した","高めた","下げた","広げた","深めた","与えた","示した","表した","つないだ","結んだ","解いた","求めた","残した","消した","生んだ","拒否した","推測した","交換した","混ぜた","察した","悟った","気づいた","見抜いた","読んだ","捉えた","掴んだ","振り返った","止めた","受け入れた","信じた","背負った","描いた","書いた","築いた","崩した","溶かした","交わった","許した","待った","超えた","越えた","憧れた","惹かれた","満たした","届けた","受け止めた","発した","出した","抱いた","刻んだ","想った","重ねた"];
let answers = [];
let results = [];
function getCipher(m,index) {
    switch (m % 4) {
        case 0: return S[index] || "？";
        case 1: return M[index] || "？";
        case 2: return O[index] || "？";
        case 3: return V[index] || "？";
    }
}
function Encryption() {
    const chars = readings.match(/[^ゃゅょ][ゃゅょ]?/g) || [];
    let code_b = [];
    for (let m = 0; m < chars.length; m++) {
        code_b[m] = Number(letters.indexOf(chars[m])) + 2;
        code_b[m] = code_b[m].toString(11).padStart(2, "0");
    }
    let body = code_b.join("");
    let digit = BigInt(body.length);
    body = parseBase11ToBigInt(body);
    body *= 10n;
    let all_code_b = BigInt(body + digit);
    let cipher_b = modPow(all_code_b, e, n).toString(11);
    if ((cipher_b.length % 2) === 1) cipher_b = "0" + cipher_b;
    let code_a = cipher_b.match(/.{1,2}/g);
    let number = code_a.length;
    let cipher_a = [];
    if ((number % 4) === 0) {
        for (let m = 0; m < code_a.length; m++) {
            let index = Number.parseInt(code_a[m], 11);
            cipher_a[m] = getCipher(m, index);
        }
    } else if (number === 5) {
        for (let m = 0; m < code_a.length; m++) {
            let index = Number.parseInt(code_a[m], 11);
            if (m === 0) {
                cipher_a[m] = S[index] || "？";
            } else if (m === 1) {
                cipher_a[m] = O[index] || "？";
            } else if (m === 2) {
                cipher_a[m] = V[index] || "？";
            } else if (m === 3) {
                cipher_a[m] = S[index] || "？";
            } else if (m === 4) {
                cipher_a[m] = V[index] || "？";
            }
        }
    } else if ((number % 4) === 1) {
        for (let m = 0; m < code_a.length; m++) {
            let index = Number.parseInt(code_a[m], 11);
            if ((number - m) <= 5) {
                if ((number - m) === 5) {
                    cipher_a[m] = S[index] || "？";
                } else if ((number - m) === 4) {
                    cipher_a[m] = O[index] || "？";
                } else if ((number - m) === 3) {
                    cipher_a[m] = V[index] || "？";
                } else if ((number - m) === 2) {
                    cipher_a[m] = S[index] || "？";
                } else if ((number - m) === 1) {
                    cipher_a[m] = V[index] || "？";
                }
            } else {
                cipher_a[m] = getCipher(m, index);
            }
        }
    } else if ((number % 4) === 2) {
        for (let m = 0; m < code_a.length; m++) {
            let index = Number.parseInt(code_a[m], 11);
            if ((number - m) <= 2) {
                if ((m % 4) === 0) {
                    cipher_a[m] = S[index] || "？";
                } else if ((m % 4) === 1) {
                    cipher_a[m] = V[index] || "？";
                }
            } else {
                cipher_a[m] = getCipher(m, index);
            }
        }
    } else if ((number % 4) === 3) {
        for (let m = 0; m < code_a.length; m++) {
            let index = Number.parseInt(code_a[m], 11);
            if ((number - m) <= 3) {
                if ((m % 4) === 0) {
                    cipher_a[m] = S[index] || "？";
                } else if ((m % 4) === 1) {
                    cipher_a[m] = O[index] || "？";
                } else if ((m % 4) === 2) {
                    cipher_a[m] = V[index] || "？";
                }
            } else {
                cipher_a[m] = getCipher(m, index);
            }
        }
    }
    answers = cipher_a.join("");
    results = `${readings}
${answers}
${pq[0] * pq[1]}
${d}`;
    console.log(results);
}
if (readings !== "") Encryption();
