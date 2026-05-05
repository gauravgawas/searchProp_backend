export const health = async (req, res) => {
  res.status(200).json({
    status: "ok",
    version: "2026-05-05",
    message: "Backend is running",
  });
};
