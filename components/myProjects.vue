<template>
  <div class="projects">
    <div class="header">Projects</div>
    <div class="blocks">
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
      <div class="project">
        <img class="img" src="../public/img/geopardy.png" alt="" />
        <div class="name">Geopardy</div>
        <div class="description">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam totam dolorum accusantium eveniet facilis necessitatibus
            exercitationem repudiandae, voluptates perferendis officiis odit
            error quaerat tempore obcaecati deserunt non similique quam id
            maiores cumque veritatis voluptas dolore? Iste eveniet odit aperiam
            fugiat quae reprehenderit placeat suscipit amet doloribus expedita
            .</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyProjects",
};
</script>
<style scoped>
.header{
  margin-left: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, .87);
  font-size: 44px;
  color: rgba(255, 255, 255, .87);;
}
.blocks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.project {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;

  font-size: 15px;
  border-radius: 10px;
  width: 450px;
  margin: 10px;
  padding: 20px;
  background-color: #242424;
  backdrop-filter: blur(5px);
}
.img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.name{
  margin-top: 20px;
  font-size: 20px;
  color: #42b883;
}
.description{
  margin-top: 10px;
  font-size: 18px;
  color: #aac8e4;
}
</style>
