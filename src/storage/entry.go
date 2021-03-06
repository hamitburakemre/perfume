package storage

import (
	"perfumepb"

	"gopkg.in/mgo.v2/bson"
)

const (
	EntryCollection = "EntryCollection"
	DatabaseName    = "test"
)

func (md *MongoDBDriver) GetEntry(entryId string) (*perfumepb.Entry, error) {
	collection := md.Session.DB(DatabaseName).C(EntryCollection)
	result := perfumepb.Entry{}
	err := collection.FindId(entryId).One(&result)

	return &result, err
}

func (md *MongoDBDriver) AddEntry(in *perfumepb.Entry) error {
	if in.Link == "" {
		return ErrorInvalidLink
	}
	collection := md.Session.DB(DatabaseName).C(EntryCollection)

	id := bson.NewObjectId().Hex()
	in.Id = id

	in.CreatedAt = millisecondNow()

	return collection.Insert(in)
}

func (md *MongoDBDriver) UpdateEntry(in *perfumepb.Entry) error {
	collection := md.Session.DB(DatabaseName).C(EntryCollection)

	return collection.UpdateId(in.Id, bson.M{
		"$set": in,
	})
}

func (md *MongoDBDriver) DeleteEntry(in *perfumepb.Entry) error {
	if in.Id == "" {
		return ErrorInvalidId
	}

	collection := md.Session.DB(DatabaseName).C(EntryCollection)

	return collection.RemoveId(in.Id)
}

func (md *MongoDBDriver) GetEntryList() (*perfumepb.EntryListResponse, error) {
	collection := md.Session.DB(DatabaseName).C(EntryCollection)

	var list []*perfumepb.Entry

	if err := collection.Find(nil).All(&list); err != nil {
		return nil, err
	}

	response := &perfumepb.EntryListResponse{
		Entries: list,
	}

	return response, nil
}
