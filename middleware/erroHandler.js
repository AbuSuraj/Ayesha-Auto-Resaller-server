const errorHanlder = (err, req, res, next) =>{
    res.send(err.message)
}
export default { errorHanlder  }; 