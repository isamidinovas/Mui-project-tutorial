import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight="100">
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar alt="Cindy Baker" src="" />

          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar alt="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="100" mt={2} mb={2}>
          Latest photos
        </Typography>
        <ImageList cols={3} gap={5} ml="60px">
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10181220/pexels-photo-10181220.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="img"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/7283543/pexels-photo-7283543.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="img"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/15091980/pexels-photo-15091980.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="img"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight="100" mt={2} mb={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
