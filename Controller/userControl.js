import USER from "../Model/userModel.js";
// const signUp = async (req, res) => {
  // try {
    // const user = await USER.find();
    // res.status(200).json({
      // results: "success",
      // data: {
        // user,
      // },
    // });
  // } catch (error) {
    // message: error;
  // }
// };



const signUp = async (req, res) => {
  try {
    const product = await USER.create(req.body);
    res.status(201).json({
      results: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
    console.log("BALA", error);
  }
};

export  {signUp}