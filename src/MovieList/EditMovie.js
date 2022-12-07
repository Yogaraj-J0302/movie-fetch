import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";
import { formValidationSchema } from "./AddMovie";
import { useFormik } from "formik";
export function EditMovie() {
  const [editMovie, seteditMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${API}/movies/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => seteditMovie(mv));
  });
  return (
    <>{editMovie ? <EditForm editMovie={editMovie} /> : <h2>Loading</h2>}</>
  );
}

function EditForm({ editMovie }) {
  const formik = useFormik({
    initialValues: editMovie,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      eventClick(values);
    },
  });
  const history = useHistory();
  const { id } = useParams();
  const eventClick = (values) => {
    fetch(`${API}/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then(() => history.push("/movieslist"))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-center">Add Your Favourite Movie</h1>
      <div className="ipField">
        <TextField
          id="movieName"
          name="movieName"
          value={formik.values.movieName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Movie's Name"
          variant="outlined"
          fullWidth
          error={
            formik.touched.movieName && formik.errors.movieName ? true : false
          }
          helperText={
            formik.touched.movieName && formik.errors.movieName
              ? formik.errors.movieName
              : ""
          }
        />
      </div>
      <div className="ipField">
        <TextField
          id="rating"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Movie's rating"
          variant="outlined"
          fullWidth
          error={formik.touched.rating && formik.errors.rating ? true : false}
          helperText={
            formik.touched.rating && formik.errors.rating
              ? formik.errors.rating
              : ""
          }
        />
      </div>
      <div className="ipField">
        <TextField
          id="url"
          name="url"
          value={formik.values.url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Movie's URL"
          variant="outlined"
          fullWidth
          error={formik.touched.url && formik.errors.url ? true : false}
          helperText={
            formik.touched.url && formik.errors.url ? formik.errors.url : ""
          }
        />
      </div>
      <div className="ipField">
        <TextField
          id="des"
          name="des"
          value={formik.values.des}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Movie's description"
          variant="outlined"
          fullWidth
          error={formik.touched.des && formik.errors.des ? true : false}
          helperText={
            formik.touched.des && formik.errors.des ? formik.errors.des : ""
          }
        />
      </div>
      <div className="ipField">
        <TextField
          id="Trailer"
          name="Trailer"
          value={formik.values.Trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Movie's Trailer"
          variant="outlined"
          fullWidth
          error={formik.touched.Trailer && formik.errors.Trailer ? true : false}
          helperText={
            formik.touched.Trailer && formik.errors.Trailer
              ? formik.errors.Trailer
              : ""
          }
        />
      </div>
      <Button type="submit" variant="contained">
        Save Changes
      </Button>
      <Button
        sx={{ marginLeft: 10 }}
        variant="outlined"
        onClick={() => history.push("/movieslist")}
      >
        Cancel
      </Button>
    </form>
  );
}
