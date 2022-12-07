import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const formValidationSchema = yup.object({
  movieName: yup.string().required("This is required Name field"),
  rating: yup.number().required("This is required Rating field").min(0).max(5),
  url: yup.string().required("This is required URL field"),
  des: yup.string().required("This is required Description field"),
  Trailer: yup.string().required("This is required Description field"),
});
export default function AddMovie() {
  const formik = useFormik({
    initialValues: { movieName: "", rating: "", url: "", des: "", Trailer: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      handleClick(values);
    },
  });
  const history = useHistory();
  const handleClick = (values) => {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-Type": "Application/json",
      },
    }).then(() => history.push("/movieslist"));
  };
  return (
    <div className="addMovie">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-center">Add Your Favourite Movie</h1>
        <div className="addingField">
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
                formik.touched.movieName && formik.errors.movieName
                  ? true
                  : false
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
              label="Movie's Rating"
              variant="outlined"
              fullWidth
              error={
                formik.touched.rating && formik.errors.rating ? true : false
              }
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
              label="Movie's Description"
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
              error={
                formik.touched.Trailer && formik.errors.Trailer ? true : false
              }
              helperText={
                formik.touched.Trailer && formik.errors.Trailer
                  ? formik.errors.Trailer
                  : ""
              }
            />
          </div>
        </div>
        <Button type="submit" variant="contained">
          Add Movie
        </Button>
        <Button
          sx={{ marginLeft: 10 }}
          variant="outlined"
          onClick={() => history.push("/addfilms")}
        >
          <RestartAltIcon />
          Reset
        </Button>
      </form>
    </div>
  );
}
