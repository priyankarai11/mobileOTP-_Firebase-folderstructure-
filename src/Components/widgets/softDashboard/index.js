/** @format */

// /** @format */

// import React from "react";
// import RocketImage from "../../../assets/images/rocket.svg";
// import { useStyles } from "./style";

// function SoftDashboard() {
//   const classes = useStyles();
//   return (
//     <div className={classes.softDashboard}>
//       <div className={classes.left}>
//         <span className={classes.title}>Built by Yasamin shahgoli gashti</span>
//         <span className={classes.mainTitle}>Soft Dashboard</span>
//         <span className={classes.info}>
//           From colors, cards, typography to complex elements, you will find the
//           full documentation.
//         </span>
//       </div>

//       <div className={classes.right}>
//         <img className={classes.rocket} src={RocketImage} alt="dollar" />
//       </div>
//     </div>
//   );
// }

// export { SoftDashboard };

import * as React from "react";
import { Grid, ButtonBase } from "@material-ui/core";
import RocketImage from "../../../assets/images/rocket.svg";
import { useStyles } from "./style";

function SoftDashboard() {
  const classes = useStyles();
  return (
    <div className={classes.softDashboard}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={4}>
            <Grid item xs className={classes.item}>
              <span className={classes.title}>
                Built by Yasamin shahgoli gashti
              </span>
              <p className={classes.mainTitle}>Soft Dashboard</p>
              <span className={classes.info}>
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <img className={classes.img} src={RocketImage} alt="dollar" />
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
}

export { SoftDashboard };
