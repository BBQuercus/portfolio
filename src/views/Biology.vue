<template>
  <div id="biology">
    <Post
      type="Biology"
      title="Current"
      image="./images/current.jpeg"
      text="In the lab of <a href='https://www.fmi.ch/research-groups/groupleader.html?group=132' target='_blank'>Jeffrey Chao</a> at the Friedrich Miescher Institute for Biomedical Research in Basel (Switzerland), I'm investigating stress granules. Using various single-molecule imaging techniques ranging from SunTag to TREAT, I'm interested to determine the effect that stress granule proteins (namely G3BP1) exert on mRNAs with regards to translation rates, stability, and localization. As these techniques have their limitations I try to improve on them and make them even more useful. Current plans are to establish a new SunTag imaging method relying on the structural support by Spaghetti Monster.
      
      Besides the wet lab, various computational tasks also require my attention. In addition to typical thresholding based image-analysis, I'm developing a deep-learning-based platform called Fluffy (check the coding section). Fluffy's focus is two-fold. First, it tries to adapt state-of-the-art methods in the fields of image segmentation and diffraction-limited spot detection. Secondly, through a simple web interface, it tries to make deep learning more accessible than ever before."
    />
    <Post
      type="Biology"
      title="Previous"
      image="./images/past.jpeg"
      text="During my Bachelor studies at the Albert Ludwigs University of Freiburg im Brsg. (Germany) I had the privilege of studying small nematodes called Caenorhabditis elegans in the <a href='https://celegans.de/' target='_blank'>Baumeister lab</a>. My goal was to investigate an endoribonuclease called endu-2. Thanks to many sacrificed worms, I was able to show various protein-RNA interactions and potential involvement in DNA methylation.
      
      An extended stay as research associate benefited me by solidifying staple lab techniques ranging from making home-made competent cells and DNA polymerase as well as a plethora of worm-specific applications."
    />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "biology",
  components: {
    Post
  }
};
</script>

<style>
</style>