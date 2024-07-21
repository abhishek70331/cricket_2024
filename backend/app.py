from flask import Flask,jsonify
import pandas as pd
import numpy as np
import csv

app = Flask(__name__)

# with open('archive\worldcup_2024.csv', 'r') as cricket:
#     reader = csv.reader(cricket)
#     print(reader)

@app.route("/")
def home():
    with open('archive\worldcup_2024.csv', 'r') as cricket:
        reader = pd.read_csv(cricket)

        #for toss
        toss = reader['Toss Decision'].value_counts().to_dict()
        
        #Top run scorer
        top_scorer = reader[reader['Top Scorer']!='Rain']['Top Scorer'].value_counts().head(6).to_dict()

        #Player of the match
        player_match = reader[reader['Player Of The Match']!='Rain']['Player Of The Match'].value_counts().head(6).to_dict()

        #Top Wicket Takers
        best_bowler = reader[reader['Best Bowler']!='Rain']['Best Bowler'].value_counts().head(6).to_dict()

        #total run in whole tournament
        first_score = reader[reader['First Innings Score']!= 'Rain']['First Innings Score'].astype(int)
        second_score= reader[reader['Second Innings Score']!= 'Rain']['Second Innings Score'].astype(int)
        total_run = [int(first_score.sum() + second_score.sum())]

        #total no of wickets taken
        first_wicket = reader[reader['Fall of wickets First Innings']!='Rain']['Fall of wickets First Innings'].astype(int)
        second_wicket = reader[reader['Fall of wickets Second Innings']!='Rain']['Fall of wickets Second Innings'].astype(int)
        total_wicket = [int(first_wicket.sum() + second_wicket.sum())]
        

        combined_data = {
            'toss_data': toss,
            'top_scorer': top_scorer,
            'player_of_the_match': player_match,
            'best_bowler':best_bowler,
            'total_runs':total_run,
            'total_wicket':total_wicket
        }


    return jsonify(combined_data)

@app.route("/")
def run_scorer():
    pass

if __name__ == '__main__':
    app.run(debug=True)

