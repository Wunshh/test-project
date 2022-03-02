import { useState } from 'react';
import './TaskFilter.css';

function TaskFilter({ getTasks, totalTaskCount }) {

    const [param, setParam] = useState("");
    const [order, setOrder] = useState("");

    let totalNumOfPage = Math.ceil(totalTaskCount / 3);
    let arrPages = []
    
    for (let i = 1; i <= totalNumOfPage; i++) {
        arrPages.push(i);
    }

    function handleParamChange(evt) {
        setParam(evt.target.value);
    }

    function handleOrderChange(evt) {
        setOrder(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        getTasks({
            page: evt.target.value,
            sortField: param,
            sortDirection: order
        });
    }

    return (
        <section className="select">
            <div className="select__page">
                <h3 className="select__title">Page number: </h3>
                    {arrPages.map((page, index) => {
                        return (
                            <button
                                type="submit" 
                                className="select__number" 
                                value={page}
                                key={index}
                                page={page}
                                onClick={handleSubmit}
                            >
                                {page}
                            </button>
                        );
                    })}
            </div>
            <form className="select__form">
                <label htmlFor="name-select" className="select__lable">Filter</label>
                <select 
                    className="select__form" 
                    id="name-select" 
                    value={param}
                    onChange={handleParamChange}
                >
                    <option className="select__option" disabled value="">-- Select filter parameters --</option>
                    <option className="select__option" value="id">id</option>
                    <option className="select__option" value="username">username</option>
                    <option className="select__option"value="email">email</option>
                    <option className="select__option" value="status">status</option>
                </select>

                <label htmlFor="order-select" className="select__lable">Order</label>
                <select 
                    className="select__form" id="order-select" 
                    value={order}
                    onChange={handleOrderChange}
                >
                    <option className="select__option" disabled value="">-- Select order parameters --</option>
                    <option className="select__option" value="asc">asc</option>
                    <option className="select__option" value="desc">desc</option>
                </select>

                <button 
                    type="submit" 
                    className="select__button"
                    onClick={handleSubmit}
                >
                    Start filter
                </button>
            </form>
        </section>
    );
}

export default TaskFilter;