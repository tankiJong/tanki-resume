import WorkExperience from '../contents/work-experience.md';
import ProjectExperience from '../contents/project-experience.md';
import ChangeLog from '../../changelog.md';
import About from '../contents/about.html';
import CommunityWork from '../contents/community-activity.md'

import marked from 'marked';

const raw = {
  WorkExperience,
  ProjectExperience,
  CommunityWork,
  // About,
  ChangeLog,
}

// const html = {

// }

const md = [];
const renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a href="${href}" target="_blank">${text}</a>`;
Object.keys(raw).forEach(k=>{
  md.push({
    title: k.replace(/([A-Z])/g," $1"),
    content: marked(raw[k], { renderer }),
  });
})

// Object.keys(html).forEach(k=>{
//   md.push({
//     title: k.replace(/([A-Z])/g," $1"),
//     content: html[k],
//   });
// })
export default md;
