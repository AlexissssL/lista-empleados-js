import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Oh no'
        })
    }
};

export const postEmployees = async (req, res) => {
    try {
        const { employees } = req.body
        let name;
        let salary;
        let category;

        const [rows] = employees.map(function(info){
            name = info.name;
            salary = info.salary;

            if (info.salary <= 60000) {
                category = "Junior"
            } else {
                category = "Senior"
            }

            pool.query('INSERT INTO employee(name, salary, category) VALUES (?, ?, ?)', [name, salary, category])
        });
        res.send({
            employees
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Oh no'
        })
    }  
};