
<script>
 function quickVideo(speed = 2) {
  $("video").each(function(k, v) {
    v.playbackRate = speed;
    console.log("视频速率为 " + speed + " x");
  });
}
</script>
