
const TableComponent = ({ item, index }) => {


  const deletePost = async (id) => {
    try {
      await fetch(`https://61bc10c0d8542f001782452d.mockapi.io/news/${id}`, {
        method: 'delete',
      }).then(response => response.json());

      // gọi lại data sau khi xóa
    } catch (error) {
      console.log(error);
    }
    window.location.reload()
  };



//  const editPost = async (id) => {
//     edit = (item) => {
//       this.setState({
//         action: "UPDATE ITEM",
//           id:item.imageMain,
//           topic: item.timeMain,
//           imageMain: item.postSmall,
//           contentMain:  item.contentMain,
//           timeMain: item.topic, 
//       });
//     };
//     updateItem = () => {
     
//         // data.json: {
//         //   id:this.state.id,
//         //   topic: this.state.topic,
//         //   imageMain: this.state.imageMain,
//         //   contentMain: this.state.contentMain,
//         //   timeMain:this.state.timeMain,       
//         // }
        
//         try {
//           await fetch(`https://61bc10c0d8542f001782452d.mockapi.io/news/${id}`, {
//             method: 'UPDATE',
//           }).then(response => response.json())
//         } catch (error) {
//           console.log(error);
//         }

//       this.setState({
//         id: "",
//         topic: "",
//         imageMain: "",
//         contentMain: "",
//         timeMain: "",
//         action: "ADD_ITEM"
        
//       });

//       window.location.reload()
//     };
//  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.topic}</td>
      <td><img className='imageMain' src={item.imageMain} alt="picture" /></td>
      <td>{item.contentMain}</td>
      <td>{item.timeMain}</td>
      <td>
        <button onClick={() => deletePost(item.id)}>Delete</button>
        <button >Edit</button>
        {/* <button onClick={() => editPost(item.id)}>Edit</button> */}
      </td>
    </tr>
  );
};

export default TableComponent

