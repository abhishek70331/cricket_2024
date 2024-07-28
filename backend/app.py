from flask import Flask,jsonify
import pandas as pd
import numpy as np
import csv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# with open('archive\worldcup_2024.csv', 'r') as cricket:
#     reader = csv.reader(cricket)
#     print(reader)
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

@app.route("/toss",methods=['GET','POST'])
def toss():
    toss = reader['Toss Decision'].value_counts().to_dict()

    return jsonify(toss)

@app.route("/scorer",methods=['GET','POST'])
def top_scorers():
    with open('archive/worldcup_2024.csv', 'r') as cricket:
        df = pd.read_csv(cricket)

    # Filter out the entries where 'Top Scorer' is 'Rain'
    df = df[df['Top Scorer'] != 'Rain']

    # Ensure 'Highest Score' is numeric and handle any potential non-numeric values
    df['Highest Score'] = pd.to_numeric(df['Highest Score'], errors='coerce')

    # Calculate total runs for each 'Top Scorer'
    top_scorers = df.groupby('Top Scorer')['Highest Score'].sum()

    # Get the top 5 scorers
    top_scorers = top_scorers.sort_values(ascending=False).head(5).to_dict()

    return jsonify(top_scorers)

@app.route("/total",methods=['GET','POST'])
def total():
    total = total_wicket + total_run
    response = {
        'total_wicket':total[0],
        'total_run':total[1]
    }
    return jsonify(response)

@app.route("/bowler",methods=['GET','POST'])
def bowler():
    # best_bowler = reader[reader['Best Bowler']!='Rain']['Best Bowler'].value_counts().head(6).to_dict()
    with open('archive\worldcup_2024.csv', 'r') as cricket:
        df = pd.read_csv(cricket)

    # Filter out entries where the match was affected by rain
    df = df[df['Best Bowler'] != 'Rain']

    # Calculate total wickets for each bowler
    df['Best Bowler Figure(Wickets Taken)'] = pd.to_numeric(df['Best Bowler Figure(Wickets Taken)'], errors='coerce')
    top_bowlers = df.groupby('Best Bowler')['Best Bowler Figure(Wickets Taken)'].sum()

    # Get the top 5 bowlers
    top_5_bowlers = top_bowlers.sort_values(ascending=False).head(5)

    # Convert the result to a dictionary
    top_5_bowlers_dict = top_5_bowlers.to_dict()

    return jsonify(top_5_bowlers_dict)

@app.route("/player",methods=['GET','POST'])
def player():
    player_match = reader[reader['Player Of The Match']!='Rain']['Player Of The Match'].value_counts().head(6).to_dict()
    
    return jsonify(player_match)

if __name__ == '__main__':
    app.run(debug=True)