// import index from '../../index.html';
// import detail from '../../views/detail.html';
let content = docuemnt.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  console.log(route);
  console.log(index);
  switch(route) {
    case '/index.html': {
      return console.log(detail);
    }
    case '/detail.html':
      return console.log(route);

    case '#':
      return console.log(route);

    default:
      return console.log('404');
  }
}

export {router};
