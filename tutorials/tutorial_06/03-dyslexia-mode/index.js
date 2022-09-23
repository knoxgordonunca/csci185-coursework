/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexiaMode = () => {

 console.log('dyslexia mode');
 document.querySelector('body').style.letterSpacing = '0.15em';
 document.querySelector('body').style.wordSpacing = '.75em';
 document.querySelector('body').style.fontVariantLigatures = 'none';
 document.querySelector('body').style.lineHeight = '2em';
 document.querySelector('body').style.fontWeight = 'bold';
 document.querySelector('.content').style.width = '50%';
document.querySelector('body').className = 'dyslexiatextcol';
}
