export const getTasks = (req, res) => {
  res.send("obteniendo tareas");
};

export const getTask = (req, res) => {
  res.send("obteniendo tarea");
};

export const createTasks = async (req, res) => {
  const { title, description } = req.body;
  const result = await pool.query(
    `INSERT INTO tasks(title, description) VALUES ?`,
    {
      title,
      description,
    }
  );

  console.log(req.body);
  res.send("creando tareas");
};

export const updateTasks = (req, res) => {
  res.send("actualizando tarea");
};

export const deleteTasks = (req, res) => {
  res.send("eliminando tarea");
};
