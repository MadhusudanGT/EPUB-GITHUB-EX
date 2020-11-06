import './App.css';
import PropTypes from 'prop-types';
import { BsFillFolderFill } from "react-icons/bs";
import { BiFileBlank } from "react-icons/bi";
import moment from 'moment';
import React from 'react';
const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];


function App() {
  return (
   <FileList files={testFiles}/>
  );
}

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array
};

function FileIcon({ file }) {
  let icon = <BiFileBlank/>;
  if(file.type === 'folder') {
   icon = <BsFillFolderFill/>;
  }

  return (
    <td>
     {icon}
    </td>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

function getFileName(file) {
  return [
    <FileIcon file={file} key={0}/>,
    <td className="file-name" key={1}>{file.name}</td>
  ];
}

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <td><FileIcon file={file} /></td>
    <td><getFileName file={file} /></td>
    <td><CommitMessage commit={file.latestCommit} /></td>
    <td><Time time={file.updated_at} /></td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
  <td className="commit-message">
    {commit.message}
  </td>
);
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
};
Time.propTypes = {
  time: PropTypes.string.isRequired
};

//What if we wanted Parent to keep track of how many times the button was clicked? In other words, Parent should track how many times its handleAction function is called.
class Parent extends React.Component{
 state={
   count:0
 }

 handleingAction=(action)=>{
console.log("clicked!!!"+action);
this.setState({
  count:this.state.count+1
})
 }

render(){
  return(
    <div>
    <Child onAction={this.handleingAction}/>
    <p>clicked{this.state.count} times</p>
    </div>
  )
}
}

const Child=(onAction)=>{
  <button onClick={onAction}>click Me</button>
}

class Inputfields extends React.Component{
  state={ text:"" };

  hamdlechanges=(event)=>{
this.setState=({
  text:event.target.value
})
  }

render(){
  return(
    <input type="text"
    value={this.state.value}
    onChange={this.hamdlechanges}
    ></input>
  )
}
}
export default App;
