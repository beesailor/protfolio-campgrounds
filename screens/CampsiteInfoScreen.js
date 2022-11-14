import { FlatList, StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { useState } from 'react';
import { Rating, Author, Comment } from 'react-native-elements';
import { postComment } from '../features/comments/commentsSlice';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    
//TASK ONE STEP: CREATE A LOCAL STATE VARIABLE CALLED SHOW MODAL
    const [showModal, setShowModal] = useState(false);
// TASK TWO STEP: INTITIALIZE THREE NEW STATE VARIABLES
    const rating = 5;
    const author = "";
    const text = "";

//TASK TWO: ADD A NEW FUNCTION- HANDLE SUBMIT
    const handleSubmit = ()=> {
        return (
            newComment = {
                author,
                rating,
                text,
                campsiteId: campsite.id
            }
        );
        dispatch(postComment(newComment));
    };

//TASK TWO: ADD A NEW FUNCTION- RESET FORM    
    const resetForm = () => {
        return (
        setRating(5);
        setAuthor("");
        setTitle("");
        );
    };

    const renderCommentItem = ({ item }) => {
        const { rating } = this.props;
        <Rating imageSize={10} readonly startingValue={this.rating} style={styles.rating} />;
        
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
            
        );
    };

    return (
        <>
            <FlatList
                
                data={comments.commentsArray.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
                renderItem={renderCommentItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    marginHorizontal: 20,
                    paddingVertical: 20
                }}
                ListHeaderComponent={
                    <>
                        <RenderCampsite
                            campsite={campsite}
                            isFavorite={favorites.includes(campsite.id)}
                            markFavorite={() => dispatch(toggleFavorite(campsite.id))}
                            
//TASK ONE PASS THE EVENT HANDLER...
                            onShowModal={() => setShowModal(!showModal)}
                        />
                        <Text style={styles.commentsTitle}>Comments</Text>
                    </>
                }
            />
//TASK ONE ADD THE MODAL
            <Modal
            animationType='slide'
            transparent={false}
            visible={showModal}
            onRequestClose={() => setShowModal(!showModal)}
            >
                <View style={styles.modal}>
                    <Rating>
                        showRating
                        {/* starting value should equal "the state" */}
                        startingValue="{3}" 
                        imageSize={40}
                        onFinishRating={(rating)=> setRating(rating)} 
                        style={{paddingVertical: 10}}
                    </Rating>
                    <Input
                        placeholder='BASIC INPUT'
                        leftIcon={{ type: 'font-awesome', name: 'user-o'}}
                        leftIconContainerStyle
                        onChangeText={(rating)=> setRating(rating)} 
                        value={text}
                    >
                    </Input>
                    <Input
                        placeholder='BASIC INPUT'
                        leftIcon={{ type: 'font-awesome', name: 'comment-o'}}
                        leftIconContainerStyle
                        onChangeText={(rating)=> setRating(rating)} 
                        value={text}
                    >
                    </Input>
                    <View style={{margin: 10}}>
                        <Button>
                            onPress={()=> {
                                handleSubmit();
                                resetForm();
                            }}
                            title='Submit'
                            color='#5637DD'
                        </Button>
                    </View>
                    <View style={{margin: 10}}>
                        <Button>
                            onPress={() => {
                                setShowModal(!showModal);
                                resetForm();
                            }}
                            color='#808080'
                            title='Cancel'
                        </Button>
                    </View>
                </View>
            </Modal> 
        </>
    );
};

const styles = StyleSheet.create({
    CommentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    CommentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
//TASK ONE SET STYLE FOR MODAL    
    Modal: {
        justifyContent: 'center',
        margin: 20
    },
});

export default CampsiteInfoScreen;