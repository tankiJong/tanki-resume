import WorkExperience from '../contents/work-experience.md';
import ProjectExperience from '../contents/project-experience.md';
import marked from 'marked';

const raw = {
  WorkExperience,
  ProjectExperience,
}

const md = [];

Object.keys(raw).forEach(k=>{
  md.push({
    title: k.replace(/([A-Z])/g," $1"),
    content: marked(raw[k]),
  });
})

export default md;
