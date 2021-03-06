import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumbs,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  LinearProgress,
  Pagination,
  Paper,
  Skeleton,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ background: "lightgrey" }}>
      <Breadcrumbs>
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
      </Breadcrumbs>
      <Breadcrumbs separator="›">
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
      </Breadcrumbs>
      <Breadcrumbs maxItems={3} separator="›">
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
        <li>ddd</li>
        <li>eee</li>
      </Breadcrumbs>
      <div>
        <Pagination count={10} color="secondary" />
        <Pagination count={10} color="secondary" variant="outlined" />
      </div>
      <div>
        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="success">This is an success alert</Alert>
        <Alert variant="filled" severity="success">
          This is an success alert
        </Alert>
      </div>
      <div className="progress">
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress variant="determinate" value={25} />
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress variant="determinate" value={75} />
      </div>
      <div className="skeleton">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={250}
          height={50}
        />
        <br />
        <Skeleton variant="circular" width={40} height={40} />
        <br />
        <Skeleton variant="text" />
      </div>
      <div>
        <Button>button</Button>
        <Snackbar
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          message="archived"
        />
      </div>
      <div className="avatarBox">
        <Avatar
          alt="Luna"
          src="https://user-images.githubusercontent.com/63533584/139567437-c1bc5e5d-4d07-4d26-915a-ba816d638c50.jpeg"
          sx={{ width: 60, height: 60 }}
        />
        <Badge overlap="circular" badgeContent={101} color="primary" max={99}>
          <Avatar sx={{ bgcolor: "purple" }}>A</Avatar>
        </Badge>
        <Divider variant="inset" />
        <AvatarGroup max={4}>
          <Avatar src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
        </AvatarGroup>
      </div>
      <div className="chipBox">
        <Chip label="outlined chip" variant="outlined" />
        <Divider variant="middle" />
        <br />
        <Chip label="filled chip" />
        <br />
        <Divider variant="middle" textAlign="left">
          left
        </Divider>
        <Divider variant="middle" textAlign="right">
          right
        </Divider>
        <Divider variant="middle">middle</Divider>
        <br />
        <Chip
          label="clickable"
          onClick={() => {
            console.log("clicked");
          }}
        />
        <Chip
          label="deletable"
          onDelete={() => {
            console.log("deleted");
          }}
        />
        <Chip
          avatar={<Avatar sx={{ bgcolor: "purple" }}>A</Avatar>}
          label="avatar"
        />
      </div>
      <div className="gridBox">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
