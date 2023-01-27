// Human Readable Time - 1st try (2023-01-27)
function humanReadable (seconds) {
  
  if(seconds >= 359999)
    return '99:59:59';
    
  console.log('Seconds: ', seconds);
  let m = Math.floor(seconds / 60);
  let s = seconds - m * 60;
  let h = Math.floor(m / 60);
  m -= h * 60;
   
  return [h.toString().padStart(2,'0'),
          m.toString().padStart(2,'0'),
          s.toString().padStart(2,'0')].join(':');

}