import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [open, setOpen] = useState(false); //modal states
  const [todo, setTodo] = useState({
    title: "",
    descripation: "",
  });
  const [todoList, setTodoList] = useState([]); // Array to store todos
  const [todoEditing, setTodoEditing] = useState(false);

  /**
   * @method [handleSubmit] use to submit the form of the admin session
   */
  const handleSubmit = () => {
    // Add the current todo to the list
    setTodoList([...todoList, todo]);

    // Clear the input fields
    setTodo({
      title: "",
      descripation: "",
    });
    setOpen(false); // Close the modal
  };

  const handleDelete = (index) => {
    console.log("d", index);
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };

  const handleEdit = (index) => {
    setTodoEditing(true);
    setOpen(true);

    if (index !== null) {
      // if (index !== null) - will not work -beacuse this represent True or false, but index is number here
      const todoToEdit = todoList[index];
      setTodo({
        title: todoToEdit.title,
        descripation: todoToEdit.descripation,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ mt: 5 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        minHeight="700px"
      >
        <Typography variant="h4">Drag & Drop Board</Typography>

        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3} sx={{ padding: 2 }}>
              <Card sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardContent>
                  <Typography variant="h4">To Do</Typography>
                </CardContent>
                <CardActions sx={{ color: "red", cursor: "pointer" }}>
                  <AddIcon onClick={() => setOpen(true)} />
                  <DeleteForeverIcon></DeleteForeverIcon>
                </CardActions>
              </Card>
              {todoList.map((todoItem, index) => (
                <Card sx={{ maxWidth: 345, mt: 2, mb: 2 }} key={index}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {todoItem.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {todoItem.descripation}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button size="small" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>

            <Grid item xs={12} md={6} lg={3} sx={{ padding: 2 }}>
              <Card sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardContent>
                  <Typography variant="h4">Progress</Typography>
                </CardContent>
                <CardActions sx={{ color: "red", cursor: "pointer" }}>
                  <AddIcon></AddIcon>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, mt: 2, mb: 2 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    To Do Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small"> Delete</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3} sx={{ padding: 2 }}>
              <Card sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardContent>
                  <Typography variant="h4">In Review</Typography>
                </CardContent>
                <CardActions sx={{ color: "red", cursor: "pointer" }}>
                  <AddIcon></AddIcon>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, mt: 2, mb: 2 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    To Do Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small"> Delete</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3} sx={{ padding: 2 }}>
              <Card sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardContent>
                  <Typography variant="h4">Done</Typography>
                </CardContent>
                <CardActions sx={{ color: "red", cursor: "pointer" }}>
                  <AddIcon></AddIcon>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345, mt: 2, mb: 2 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    To Do Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small"> Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ----------- Modal for Both -Create & Edit ------------------------------ */}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setTodoEditing(false);
          // Clear the input fields
          setTodo({
            title: "",
            descripation: "",
          });
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xs" sx={{ padding: 5, background: "White" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            marginBottom={2}
          >
            <Typography variant="h4">
              {todoEditing ? "Edit Task" : "Create Task"}
            </Typography>
            <CloseIcon
              onClick={() => {
                setOpen(false);
                setTodoEditing(false);
              }}
              sx={{ color: "rgb(19 117 137)", cursor: "pointer" }}
            ></CloseIcon>
          </Stack>
          <form onSubmit={handleSubmit} autocomplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Title"
                  value={todo.title}
                  onChange={(e) => {
                    setTodo({ ...todo, title: e.target.value }); //...todo- is used as a spread operator to create a new object that retains the existing properties of the todo object while also updating the specific property that is being changed. I
                  }}
                  //   defaultValue="Hello World"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Description"
                  multiline
                  maxRows={4}
                  value={todo.descripation}
                  onChange={(e) => {
                    setTodo({ ...todo, descripation: e.target.value }); //...todo- is used as a spread operator to create a new object that retains the existing properties of the todo object while also updating the specific property that is being changed. I
                  }}
                />
              </Grid>
            </Grid>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{ mt: 2.5 }}
            >
              <Button
                type="submit"
                variant="outlined"
                onClick={() => setOpen(true)}
                sx={{
                  border: "1px solid",
                  borderColor: "rgb(19 117 137)",
                }}
              >
                Go Back
              </Button>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  border: "1px solid",
                  borderColor: "rgb(19 117 137)",
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Container>
      </Modal>
    </Container>
  );
};

export default Home;
