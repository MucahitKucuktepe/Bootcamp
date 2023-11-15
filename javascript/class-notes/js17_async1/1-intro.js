//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// console.log("*** Senkron *** ")

// console.log("FS15");

// const gecikme =(sure)=>{
//     const basla=new Date().getTime()
//     while(new Date().getTime()< basla +sure){}
// }
// const baslangic=console.time("basla") //timer ı başlat
// gecikme(2000)
// console.log("bitti");
// console.timeEnd("basla") //timer ı bitir ve geçen süreyi bana göster

//* Asenkron(SeTimout) --belli bir süre sonraya zaman kurar
//* ------------------------------------------------
// console.log("TimeOut kuruldu");
// const timeOut=setTimeout(()=>{
//     console.log("Sure Doldu");
// },1000)
// const timeOut2=setTimeout(()=>{
//     console.log("Sure2 Doldu");
// },0)
// console.log("TimeOut bitti");

//* Asenkron(setInterval, clearInterval) --belli bir süre sonraya zaman kurar
//* ------------------------------------------------
// let i =0
// const zaman =setInterval(()=>{
//     console.log(++i);
//     if(i>=5){
//         clearInterval(zaman)
//     }
// },10000)

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi")
    setTimeout(() => {
      console.log("Sarah: Hello")
      setTimeout(() => {
        console.log("John: How Are you?")
        setTimeout(() => {
          console.log("Sarah:Fine and you?")
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)