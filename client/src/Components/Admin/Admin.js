import React, { useState } from 'react';

const Admin = () => {
    const [form, setForm] = useState({
        title:'',
        description: '',
        price:'',
        category:''
    });
    const [file, setFile] = useState(null);

    const handleOnChange = (event) => {
        const newForm = {...form}
        newForm[event.target.name] = event.target.value;
        setForm(newForm)
    };
    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile)
    };
    const handleSubmit = (event) => {
        const formData = new formData;
        formData.append('file', file);
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('price', form.price);
        formData.append('category', form.category);

        fetch('http://localhost:5000/admin/',
        {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        event.preventDefault();
        
    }
    return (
        <div className="row container">
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id='title' name='title' onChange={handleOnChange}/>
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" name='description' id='description' onChange={handleOnChange}/>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" className='form-control' onChange={handleOnChange}/>
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" id='Category' name='category' onChange={handleOnChange}/>
                    <label htmlFor="fileUpload">Upload Image</label>
                    <input type="file" name="file" id="fileUpload" className='form-control' onChange={handleFileChange}/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="col-md-6"></div>
        </div>
    );
};

export default Admin;