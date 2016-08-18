import WorkExperience from '../contents/work-experience.md';
import ProjectExperience from '../contents/project-experience.md';
import about from '../contents/about.html';
import marked from 'marked';

const raw = {
  WorkExperience,
  ProjectExperience,
}

const html = {
  about,
}

const md = [];

Object.keys(raw).forEach(k=>{
  md.push({
    title: k.replace(/([A-Z])/g," $1"),
    content: marked(raw[k]),
  });
})

Object.keys(html).forEach(k=>{
  md.push({
    title: k.replace(/([A-Z])/g," $1"),
    content: html[k],
  });
})
export default md;
