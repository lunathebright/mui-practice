import { Avatar, AvatarGroup, Badge, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Main() {
  return (
    <div style={{ background: "lightgrey" }}>
      <div className="avatarBox">
        <Avatar
          alt="Luna"
          src="https://user-images.githubusercontent.com/63533584/139567437-c1bc5e5d-4d07-4d26-915a-ba816d638c50.jpeg"
          sx={{ width: 60, height: 60 }}
        />
        <Badge overlap="circular" badgeContent={101} color="primary" max={99}>
          <Avatar sx={{ bgcolor: "purple" }}>A</Avatar>
        </Badge>
        <AvatarGroup max={8}>
          <Avatar src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
          <Avatar src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
        </AvatarGroup>
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
