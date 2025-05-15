export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNUmber, password, role } = req.body;
    if (!fullName || !email || !phoneNUmber || !password || !role) {
      return res.status(400).json({
        message: "Please fill all the fields",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phoneNUmber,
      password: hashedPassword,
      role,
    });
  } catch (error) {}
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!fullName || !email || !phoneNUmber || !password || !role) {
      return res.status(400).json({
        message: "Please fill all the fields",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
      });
    }
    const ispasswordMatch = await bcrypt.compare(password, user.password);
    if (!ispasswordMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false,
      });
    }
  } catch (error) {}
};
