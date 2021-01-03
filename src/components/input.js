import React from "react"
import { FormControl, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center'
    },
    card: {
        display: 'flex',
        width: '80%',
        'flex-direction': 'column',
        'justify-content': 'center'
    },
    form: {
        width: '80%',
        'justify-content': 'center'
    }
})

export default function InputForm () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card} variant="outlined">
                <CardContent>
                    <FormControl className={classes.form}>
                        <TextField id="outlined-basic" label="책 이름을 검색해주세요" variant="outlined" />
                        <br />
                        <TextField
                            id="outlined-multiline-static"
                            label="당신이 인상 깊었던 구절, 혹은 소감을 써주세요"
                            multiline
                            rows={4}
                            variant="outlined"
                        />
                    </FormControl>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}
