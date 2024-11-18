import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ timespan, setTimespan, minMag, setMinMag }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "#004488" }}>
        <Toolbar variant="regular">
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Stack direction="row" alignItems="center">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                USGS Earthquakes
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <ToggleButtonGroup
                color="secondary"
                value={timespan}
                exclusive
                onChange={(e, newTimespan) => setTimespan(newTimespan)}
              >
                <ToggleButton value="hour">Past Hour</ToggleButton>
                <ToggleButton value="day">Past Day</ToggleButton>
                <ToggleButton value="week">Past Week</ToggleButton>
                <ToggleButton value="month">Past 30 Days</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                color="secondary"
                value={minMag}
                exclusive
                onChange={(e, newMinMag) => setMinMag(newMinMag)}
              >
                <ToggleButton value="all">All</ToggleButton>
                <ToggleButton value="1.0">M1.0+</ToggleButton>
                <ToggleButton value="2.5">M2.5+</ToggleButton>
                <ToggleButton value="4.5">M4.5+</ToggleButton>
                <ToggleButton value="significant">Significant</ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
