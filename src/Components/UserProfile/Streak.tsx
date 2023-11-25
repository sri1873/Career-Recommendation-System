import { ResponsiveCalendar } from '@nivo/calendar'

const data = [
    {
        "value": 9,
        "day": "2023-04-04"
    },
    {
        "value": 5,
        "day": "2023-02-03"
    },
    {
        "value": 8,
        "day": "2023-03-16"
    },
    {
        "value": 3,
        "day": "2023-01-24"
    },
    {
        "value": 7,
        "day": "2023-05-19"
    },
    {
        "value": 10,
        "day": "2023-05-31"
    },
    {
        "value": 2,
        "day": "2023-02-07"
    },
    {
        "value": 6,
        "day": "2023-04-16"
    },
    {
        "value": 1,
        "day": "2023-08-03"
    },
    {
        "value": 4,
        "day": "2023-01-21"
    },
    {
        "value": 9,
        "day": "2023-06-05"
    },
    {
        "value": 8,
        "day": "2023-06-26"
    },
    {
        "value": 7,
        "day": "2023-07-31"
    },
    {
        "value": 10,
        "day": "2023-01-20"
    },
    {
        "value": 3,
        "day": "2023-03-29"
    },
    {
        "value": 1,
        "day": "2023-08-08"
    },
    {
        "value": 6,
        "day": "2023-02-17"
    },
    {
        "value": 2,
        "day": "2023-01-02"
    },
    {
        "value": 5,
        "day": "2023-06-11"
    },
    {
        "value": 6,
        "day": "2023-06-15"
    },
    {
        "value": 10,
        "day": "2023-06-02"
    },
    {
        "value": 8,
        "day": "2023-05-04"
    },
    {
        "value": 1,
        "day": "2023-08-11"
    },
    {
        "value": 9,
        "day": "2023-06-17"
    },
    {
        "value": 4,
        "day": "2023-07-08"
    },
    {
        "value": 2,
        "day": "2023-04-06"
    },
    {
        "value": 4,
        "day": "2023-07-24"
    },
    {
        "value": 4,
        "day": "2023-05-03"
    },
    {
        "value": 7,
        "day": "2023-04-21"
    },
    {
        "value": 6,
        "day": "2023-03-01"
    },
    {
        "value": 10,
        "day": "2023-01-23"
    },
    {
        "value": 2,
        "day": "2023-08-06"
    },
    {
        "value": 4,
        "day": "2023-03-11"
    },
    {
        "value": 1,
        "day": "2023-07-26"
    },
    {
        "value": 7,
        "day": "2023-02-10"
    },
    {
        "value": 1,
        "day": "2023-01-15"
    },
    {
        "value": 2,
        "day": "2023-01-08"
    },
    {
        "value": 5,
        "day": "2023-02-26"
    },
    {
        "value": 8,
        "day": "2023-06-07"
    },
    {
        "value": 3,
        "day": "2023-04-30"
    },
    {
        "value": 9,
        "day": "2023-02-12"
    },
    {
        "value": 4,
        "day": "2023-03-06"
    },
    {
        "value": 8,
        "day": "2023-07-11"
    },
    {
        "value": 5,
        "day": "2023-02-21"
    },
    {
        "value": 9,
        "day": "2023-01-19"
    },
    {
        "value": 6,
        "day": "2023-03-09"
    },
    {
        "value": 8,
        "day": "2023-03-03"
    },
    {
        "value": 4,
        "day": "2023-07-16"
    },
    {
        "value": 7,
        "day": "2023-03-05"
    },
    {
        "value": 10,
        "day": "2023-06-20"
    },
    {
        "value": 1,
        "day": "2023-05-21"
    },
    {
        "value": 3,
        "day": "2023-08-01"
    },
    {
        "value": 5,
        "day": "2023-06-12"
    },
    {
        "value": 10,
        "day": "2023-05-25"
    },
    {
        "value": 9,
        "day": "2023-06-16"
    },
    {
        "value": 6,
        "day": "2023-02-02"
    },
    {
        "value": 9,
        "day": "2023-03-31"
    },
    {
        "value": 8,
        "day": "2023-01-14"
    },
    {
        "value": 6,
        "day": "2023-03-26"
    },
    {
        "value": 2,
        "day": "2023-04-12"
    },
    {
        "value": 7,
        "day": "2023-06-01"
    },
    {
        "value": 8,
        "day": "2023-01-25"
    },
    {
        "value": 5,
        "day": "2023-02-13"
    },
    {
        "value": 5,
        "day": "2023-07-06"
    },
    {
        "value": 7,
        "day": "2023-07-22"
    }]

const Streak = () => {
    return(
        <ResponsiveCalendar
            data={data}
            from="2023-01-01"
            to="2023-12-31"
            emptyColor="#000"
            colors={['#caf0f8', '#ade8f4', '#90e0ef', '#00b4d8']}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            monthBorderColor="#ffffff"
            monthLegendOffset={8}
            monthBorderWidth={1.5}
            dayBorderWidth={1.5}
            dayBorderColor="#ffffff"            
            theme={{
                "text":{"fill":"white"},
                "tooltip": {
                    "container": {
                        "background": "#000000",
                        "fontSize": 12
                    }
                },
            }}
        />
    );
}

export default Streak