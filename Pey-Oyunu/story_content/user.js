window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Storyline oynatıcısını al
var player = GetPlayer();

// Her saniye çalışacak olan zamanlayıcı fonksiyonu
function timer() {
  // toplamSaniye değişkenini Storyline'dan al
  var totalSeconds = player.GetVar("toplamSaniye");

  // Süre 0'dan büyükse sayacı devam ettir
  if (totalSeconds > 0) {
    // Toplam saniyeyi bir azalt
    totalSeconds--;
    
    // Yeni değeri Storyline'a geri gönder
    player.SetVar("toplamSaniye", totalSeconds);
    
    // Gösterim için dakika ve saniyeyi hesapla
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    
    // Tek haneli rakamların başına "0" ekle (örn: 09, 08...)
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    // Görüntü değişkenlerini güncelle
    player.SetVar("dakika", minutes);
    player.SetVar("saniye", seconds);
    
  } else {
    // Süre bittiğinde zamanlayıcıyı temizle
    clearInterval(interval);
  }
}

// Bu kodun daha önce çalışıp çalışmadığını kontrol et.
// Bu, kullanıcının 2. slayta geri dönmesi durumunda yeni bir sayaç başlatmasını engeller.
if (window.timerInterval == undefined) {
    window.timerInterval = setInterval(timer, 1000);
}
}

window.Script2 = function()
{
  // 1. Storyline oynatıcısına erişim sağla
const player = GetPlayer();

// 2. Storyline'da oluşturduğumuz 'soruSayisi' değişkenini al
let mevcutSoru = player.GetVar("soruSayisi");

// 3. Soru sayısını 1 artır
mevcutSoru++;

// 4. Artırılmış yeni değeri tekrar Storyline'a kaydet.
player.SetVar("soruSayisi", mevcutSoru);

// 5. Yüzdelik ilerlemeyi hesapla (Toplam 18 soru var)
const yuzde = Math.round((mevcutSoru / 18) * 100);

// 6. Yüzde metnini güncelle
const yuzdeMetniKutusu = document.querySelector("[data-acc-text='yuzdeMetni']");
if (yuzdeMetniKutusu) {
  yuzdeMetniKutusu.innerHTML = "%" + yuzde;
}

// 7. İlerleme çubuğunun genişliğini güncelle
const ilerlemeCubuguSekli = document.querySelector("[data-acc-text='ilerlemeCubugu']");
const arkaPlanGenisligi = document.querySelector("[data-acc-text='ilerlemeArkaPlan']").getBoundingClientRect().width;

if (ilerlemeCubuguSekli) {
  ilerlemeCubuguSekli.style.width = (arkaPlanGenisligi * (yuzde / 100)) + "px";
}

// 8. Yüzdeye göre çubuğun VE METNİN rengini değiştir
if (yuzdeMetniKutusu) { // Metin kutusunun var olduğundan emin olalım
    if (yuzde < 50) {
      // %0-49 arası renk
      gsap.to(ilerlemeCubuguSekli, {backgroundColor: "#A8F092", duration: 0.5});
      yuzdeMetniKutusu.style.color = "#191919"; // YENİ EKLENEN SATIR
    } else if (yuzde < 90) {
      // %50-89 arası renk
      gsap.to(ilerlemeCubuguSekli, {backgroundColor: "#A8F092", duration: 0.5});
      yuzdeMetniKutusu.style.color = "#191919"; // YENİ EKLENEN SATIR
    } else {
      // %90 ve üstü renk
      gsap.to(ilerlemeCubuguSekli, {backgroundColor: "#A8F092", duration: 0.5});
      yuzdeMetniKutusu.style.color = "#191919"; // YENİ EKLENEN SATIR
    }
}
}

window.Script3 = function()
{
  // Storyline oynatıcısını al
var player = GetPlayer();

// Her saniye çalışacak olan zamanlayıcı fonksiyonu
function timer() {
  // toplamSaniye değişkenini Storyline'dan al
  var totalSeconds = player.GetVar("toplamSaniye");

  // Süre 0'dan büyükse sayacı devam ettir
  if (totalSeconds > 0) {
    // Toplam saniyeyi bir azalt
    totalSeconds--;
    
    // Yeni değeri Storyline'a geri gönder
    player.SetVar("toplamSaniye", totalSeconds);
    
    // Gösterim için dakika ve saniyeyi hesapla
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    
    // Tek haneli rakamların başına "0" ekle (örn: 09, 08...)
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    // Görüntü değişkenlerini güncelle
    player.SetVar("dakika", minutes);
    player.SetVar("saniye", seconds);
    
  } else {
    // Süre bittiğinde zamanlayıcıyı temizle
    clearInterval(interval);
  }
}

// Bu kodun daha önce çalışıp çalışmadığını kontrol et.
// Bu, kullanıcının 2. slayta geri dönmesi durumunda yeni bir sayaç başlatmasını engeller.
if (window.timerInterval == undefined) {
    window.timerInterval = setInterval(timer, 1000);
}
}

window.Script4 = function()
{
  // 1. Storyline oynatıcısına erişim sağla
const player = GetPlayer();

// 2. Storyline'da oluşturduğumuz 'soruSayisi' değişkenini al
let mevcutSoru = player.GetVar("soruSayisi");

// 3. Soru sayısını 1 artır
mevcutSoru++;

// 4. Artırılmış yeni değeri tekrar Storyline'a kaydet.
player.SetVar("soruSayisi", mevcutSoru);

// 5. Yüzdelik ilerlemeyi hesapla (Toplam 18 soru var)
const yuzde = Math.round((mevcutSoru / 18) * 100);

// 6. Yüzde metnini güncelle
const yuzdeMetniKutusu = document.querySelector("[data-acc-text='yuzdeMetni']");
if (yuzdeMetniKutusu) {
  yuzdeMetniKutusu.innerHTML = "%" + yuzde;
}

// 7. İlerleme çubuğunun genişliğini güncelle
const ilerlemeCubuguSekli = document.querySelector("[data-acc-text='ilerlemeCubugu']");
const arkaPlanGenisligi = document.querySelector("[data-acc-text='ilerlemeArkaPlan']").getBoundingClientRect().width;

if (ilerlemeCubuguSekli) {
  ilerlemeCubuguSekli.style.width = (arkaPlanGenisligi * (yuzde / 100)) + "px";
}

// 8. Yüzdeye göre çubuğun VE METNİN rengini değiştir
if (yuzdeMetniKutusu) { // Metin kutusunun var olduğundan emin olalım
    if (yuzde < 50) {
      // %0-49 arası renk
      gsap.to(ilerlemeCubuguSekli, {backgroundColor: "#A8F092", duration: 0.5});
      yuzdeMetniKutusu.style.color = "#191919"; // YENİ EKLENEN SATIR
    } else if (yuzde < 90) {
      // %50-89 arası renk
      gsap.to(ilerlemeCubuguSekli, {backgroundColor: "#A8F092", duration: 0.5});
      yuzdeMetniKutusu.style.color = "#191919"; // YENİ EKLENEN SATIR
    } else {
      // %90 ve üstü renk
      gsap.to(ilerlemeCubuguSekli, {backgroundColor: "#A8F092", duration: 0.5});
      yuzdeMetniKutusu.style.color = "#191919"; // YENİ EKLENEN SATIR
    }
}
}

};
