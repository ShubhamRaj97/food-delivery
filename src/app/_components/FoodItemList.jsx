const FooditemList=()=>{
    return(
        <div>
            <h1>Food Items</h1>
            <table>
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Name</td>
                        <td>price</td>
                        <td>Image</td>
                        <td>Operation</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pizza</td>
                        <td>100</td>
                        <td>image</td>
                        <td>very good</td>
                        <td><button>delete</button><button>edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FooditemList;