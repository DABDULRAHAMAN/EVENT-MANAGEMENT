
from app import app, db, User

# Add sample users
def add_sample_users():
    user1 = User(username='ABDUL', password='RAHAMAN')
    user2 = User(username='ARPIT', password='SHARMA')
    user3 = User(username='AARYAN', password='AGARWAL')

    # Use app context
    with app.app_context():
        db.session.add(user1)
        db.session.add(user2)
        db.session.add(user3)
        db.session.commit()
        print("Users added to the database.")

if __name__ == '__main__':
    add_sample_users()