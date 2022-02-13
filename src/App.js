import React from 'react';
import './App.css';
import Obrazek from './code.svg';
import Markdown from "marked-react";

//default text in textarea
const placeholderTxt = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

// komponent klasowy - text area z inputem
class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: placeholderTxt
    };
    
    // bind metody
    this.handleInput = this.handleInput.bind(this);

  }

  handleInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {

    return (
      <div>
        <label className='block mx-auto w-6/12 py-5 font-semibold'>Type text using lighweight markup language</label>
        <textarea id='editor' className='block mx-auto w-6/12 p-7' name='userInput' onChange={this.handleInput} value={this.state.userInput}></textarea>
        <h1 className='block mx-auto w-6/12 pt-10 pb-5 font-bold text-center'>Previewer</h1>
        {/* safe solution: npm i marked-react -> Markdown */}
        <div id='preview' className='block mx-auto w-6/12 p-7 h-full mb-10 whitespace-pre-wrap'>
          <Markdown>{this.state.userInput}</Markdown>
        </div>

      </div>
    );
  }
};


function App() {

  return (
    <div className="tracking-wider">

      <img src={Obrazek} alt="Code bg" className='fixed bg top-0 left-0'/>
      <header>
          <h1 className='font-bold text-center pt-20 pb-5'> Markdown <span>Previewer</span></h1>
      </header>
      
      <Area/>


    </div>
  );
}

export default App;
