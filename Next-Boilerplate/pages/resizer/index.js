const Resizer = ({size,file})=>{
    const Compress=()=>{

    }
    return (
        <div><p>With Resizer you can reduce your uploaded file size by using advance AI tech.</p>
        <p>Currently your file size is {size}</p>
        <button onClick={Compress}>Re-Size</button>

        </div>
    )
}
export default Resizer;