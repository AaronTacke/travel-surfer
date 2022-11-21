#!/bin/python3
from datetime import datetime
import time
from matplotlib import pyplot as plt

def line_to_data(line):
    parts = line.split(" ")
    time_stamp = parts[2]
    d = datetime.strptime(time_stamp,'%H:%M:%S')

    rate = parts[16]
    if rate == '':
        rate = parts[17]
    if rate == '' or not rate[0].isdigit():
        return 0,0
    seconds = int(time.mktime(d.timetuple())) - -2208992197
    return seconds,float(rate)

def parse_up_down(up,down):
    time_stamp, rate_up = line_to_data(up)
    time_stamp, rate_down = line_to_data(down)
    print(f"{time_stamp};{rate_up};{rate_down}")
    return (time_stamp,rate_up,rate_down)

t = []
x = []
y = []

with open("input.csv","r") as in_file:
    last_line = ""
    for line in in_file:
        if line.strip().endswith("receiver"):
            time_stam, up, down = parse_up_down(last_line,line)
            t.append(time_stam)
            x.append(up)
            y.append(down)
        last_line = line
    
plt.plot(t,x)

plt.show()