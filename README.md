# How to Use as Student
With Google Chrome, open the `index.html` file to see your current blog post. Refresh this page after you make changes to see the changes.

To write your blog, write inside the HTML tags like so `<p> YOUR TEXT HERE </p>`. In HTML, `<p>` means "paragraph." To write a paragraph header, write your text inside `<h> </h>` tags. 

To be able to play audio, copy and paste your MP3 file in this folder (same folder as `index.html`) and rename it `soundfile.mp3`. 
To reference segments of audio, write this tag: `<sup class="player">0:30-0:35 </sup>`. The important thing is to keep it in `mm:ss` or `hh:mm:ss` and to write a `-` between the start/end times. Now, if you click the time, it should play the audio.

# Giving Credit
I wrote the JS code for parsing the student-written timestamps, loading the audio, and playing the audio. I used the [howler.js](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library) library to actually play the audio files. 

The HTML and CSS is from a bootstrap template, the README of which I've pasted below.

## [Start Bootstrap](http://startbootstrap.com/) - [Clean Blog](http://startbootstrap.com/template-overviews/clean-blog/)

[Clean Blog](http://startbootstrap.com/template-overviews/clean-blog/) is a stylish, responsive blog theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Start Bootstrap Creator

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2016 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/gh-pages/LICENSE) license.